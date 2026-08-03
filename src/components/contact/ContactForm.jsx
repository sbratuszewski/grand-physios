import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../ui/Button'

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
        toast.success('✅ Message sent successfully!')
        reset()
      })
      .catch(() => toast.error('❌ Something went wrong. Please try again.'))
      .finally(() => setLoading(false))
  }

  // High-contrast input styling for dark card container
  const inputClass =
    'w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20 focus:bg-slate-800 shadow-inner'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-800 p-6 sm:p-10 space-y-6"
    >
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Full name"
          className={inputClass}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-2 ml-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          placeholder="Email address"
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-2 ml-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: { value: /^[+\d\s-]+$/, message: 'Invalid phone number' },
          })}
          placeholder="Phone number"
          className={inputClass}
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-2 ml-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="How can we help you today?"
          rows={4}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-2 ml-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Clean button call leveraging central Button component */}
      <Button
        type="submit"
        size="lg"
        className="w-full mt-2"
        disabled={loading}
      >
        {loading && (
          <span
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
            role="status"
          ></span>
        )}
        {loading ? 'Sending Message...' : 'Send Message'}
      </Button>

      <Toaster position="bottom-center" />
    </form>
  )
}

export default ContactForm