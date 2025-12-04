import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import Button from './Button'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = React.useState(false)

  const onSubmit = (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    setLoading(true)
    emailjs
      .send(serviceId, templateId, data, publicKey)
      .then(() => {
        toast.success('✅ Message sent!')
        reset()
      })
      .catch(() => toast.error('❌ Something went wrong.'))
      .finally(() => setLoading(false))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 space-y-4 text-gray-800 bg-gray-200 rounded-lg shadow-lg"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      {/* <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Send us a message
      </h2> */}

      <input
        {...register('name', { required: true })}
        placeholder="Full name"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      {errors.name && <p className="text-red-600 text-sm">Name is required</p>}

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
        })}
        placeholder="Email address"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">{errors.email.message}</p>
      )}

      <input
        {...register('phone', {
          pattern: { value: /^[+\d\s-]+$/, message: 'Invalid phone number' },
        })}
        placeholder="Phone number (optional)"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      {errors.phone && (
        <p className="text-red-600 text-sm">{errors.phone.message}</p>
      )}

      <textarea
        {...register('message', { required: true })}
        placeholder="Enquiry"
        className="w-full bg-white rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      {errors.message && (
        <p className="text-red-600 text-sm">Message is required</p>
      )}

      <Button
        type="submit"
        className="w-full text-white bg-teal-600 hover:bg-teal-700 shadow-md flex items-center justify-center gap-2 py-2"
        disabled={loading}
      >
        {loading && (
          <span
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            role="status"
          ></span>
        )}
        {loading ? 'Sending...' : 'Submit'}
      </Button>
      <Toaster position="bottom-center" />
    </form>
  )
}

export default ContactForm
