export default function Footer() {
  return (
    <footer className="w-full p-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-3 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">
            Grand Physios
          </h2>
          <p>Proffesional physiotherapy services.</p>
          <p>Helping Aberdeen stay active and pain-free.</p>
        </div>
        <div className="flex flex-col gap-3 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">Quick Links</h2>
          <a href="http://">Services</a>
          <a href="http://">About</a>
          <a href="http://">Contact Us</a>
          <a href="http://">FAQs</a>
        </div>
        <div className="flex flex-col gap-3 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">Our Services</h2>
          <p>Home Visits</p>
          <p>Pain Management</p>
          <p>Post-Surgical Rehab</p>
          <p>Sports Injury Rehab</p>
        </div>
        <div className="flex flex-col gap-3 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">Contact</h2>
          <a href="mailto:">info@grandphysios.com</a>
          <a href="tel:+">11111111111</a>
        </div>
      </div>

      <p className="w-full text-center text-sm mt-10">
        &copy; {new Date().getFullYear()} Aberdeen Physio Clinic. All rights
        reserved.
      </p>
    </footer>
  )
}
