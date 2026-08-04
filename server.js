app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // 1. User email to admin
  const adminMailOptions = {
    from: `"Grand Physios Web" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Request: ${name}`,
    html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
  }

  // 2. Confirmation email to user
  const clientMailOptions = {
    from: `"Grand Physios" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `We've received your message, ${name}! — Grand Physios`,
    html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; margin: 0; padding: 20px; color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; overflow: hidden; }
            .header { background-color: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #334155; }
            .logo { max-width: 150px; height: auto; }
            .content { padding: 30px; line-height: 1.6; }
            .title { font-size: 20px; font-weight: bold; color: #14b8a6; margin-bottom: 16px; }
            .text { color: #cbd5e1; font-size: 15px; margin-bottom: 20px; }
            .box { background-color: #0f172a; border-left: 4px solid #14b8a6; padding: 15px; border-radius: 6px; margin: 20px 0; font-size: 14px; color: #94a3b8; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #64748b; border-top: 1px solid #334155; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img https://grandphysios.com/assets/GP_logo-CfAPkUbq.svg" alt="Grand Physios" class="logo" />
            </div>
            <div class="content">
              <div class="title">Thank you for reaching out, ${name}!</div>
              <p class="text">
                We have successfully received your message. A member of our team will review your inquiry and get back to you shortly.
              </p>
              <div class="box">
                <strong>Your submitted message:</strong><br/>
                "${message}"
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Grand Physios. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
  }

  try {
    // Send both emails symultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    return res.status(200).json({ message: 'Messages sent successfully' })
  } catch (error) {
    console.error('Mail error:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
})
