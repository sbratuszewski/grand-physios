import React from 'react'
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

const ContactInfoBlock = () => {
  return (
    <div className="space-y-6">
      {/* Karta informacyjna z akcentem */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Get in touch directly
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Prefer to reach out via email or learn more about our home visits in
          Aberdeen? Here is how you can find us.
        </p>

        <div className="space-y-4 pt-2">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email Us
              </p>
              <a
                href="mailto:info@grandphysios.com"
                className="text-slate-800 font-semibold hover:text-teal-600 transition-colors"
              >
                info@grandphysios.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Location
              </p>
              <p className="text-slate-800 font-semibold">
                Aberdeen, United Kingdom
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Working Hours
              </p>
              <p className="text-slate-800 font-semibold">
                Mon - Fri: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mały boks z punktami zaufania (Trust Signals) */}
      <div className="bg-teal-900/5 border border-teal-500/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
          <CheckCircle2 size={18} />
          <span>Quick Response Guarantee</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          We aim to respond to all inquiries within 24 business hours.
        </p>
      </div>
    </div>
  )
}

export default ContactInfoBlock
