import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Button from './Button'

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
      className="max-w-xl mx-auto p-6 space-y-4 bg-gray-200 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

      <input
        {...register('fullName', { required: true })}
        placeholder="Full name"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm"
      />
      <input
        {...register('email', { required: true })}
        placeholder="Email address"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm"
      />
      <input
        {...register('phone', { required: true })}
        placeholder="Phone number"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm"
      />
      <textarea
        {...register('message', { required: true })}
        placeholder="Message"
        rows="5"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm"
      />
      <Button
        type="submit"
        className="w-full text-white bg-teal-600 hover:bg-teal-700 shadow-md"
        text="Send Message"
      />
      {/* <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-sky-700 shadow-sm"
      >
        Send Message
      </button> */}
    </form>
  )
}
export default ContactForm
