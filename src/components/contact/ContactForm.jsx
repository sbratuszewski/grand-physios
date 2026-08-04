import React from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Textarea from '../ui/TextArea'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('✅ Message sent successfully!')
        reset()
      } else {
        toast.error(`❌ ${result.error || 'Something went wrong.'}`)
      }
    } catch {
      toast.error('❌ Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-800 p-6 sm:p-10 space-y-6"
      noValidate
    >
      <Input
        placeholder="Full name"
        error={errors.name?.message}
        {...register('name', {
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
        })}
      />

      <Input
        type="email"
        placeholder="Email address"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email address',
          },
        })}
      />

      <Input
        type="tel"
        placeholder="Phone number"
        error={errors.phone?.message}
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/,
            message: 'Invalid phone number format',
          },
        })}
      />

      <Textarea
        rows={4}
        placeholder="How can we help you today?"
        error={errors.message?.message}
        {...register('message', {
          required: 'Message is required',
          minLength: {
            value: 10,
            message: 'Message must be at least 10 characters',
          },
        })}
      />

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
          />
        )}
        {loading ? 'Sending Message...' : 'Send Message'}
      </Button>

      <Toaster position="bottom-center" />
    </form>
  )
}

export default ContactForm