import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

function ContactForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      alert("Message sent! We'll contact you soon.")
      reset()
    } catch (err) {
      console.error(err)
      alert('Error sending message, please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <input
        {...register('fullName', { required: true })}
        placeholder="Full name"
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        {...register('email', { required: true })}
        placeholder="Email address"
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        {...register('phone', { required: true })}
        placeholder="Phone number"
        className="w-full border rounded-lg px-3 py-2"
      />
      <textarea
        {...register('message', { required: true })}
        placeholder="Message"
        rows="5"
        className="w-full border rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700"
      >
        Send Message
      </button>
    </form>
  )
}
export default ContactForm
