export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 bg-blue-900 text-white p-6">
      <div className="flex justify-around">
        <div>
          <h2>Grand Physios</h2>
          <p>Proffesional physiotherapy services.</p>
          <p>Helping Aberdeen stay active and pain-free.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <l1>Services</l1>
            <l1>About Us</l1>
            <l1>Contact</l1>
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            <l1>Home Visits</l1>
            <l1>Pain Management</l1>
            <li>Post-Surgical Rehab</li>
            <l1>Sports Injury Rehab</l1>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <l1></l1>
            <l1></l1>
          </ul>
        </div>
      </div>
      <p className="w-full text-center mt-10">
        &copy; {new Date().getFullYear()} Aberdeen Physio Clinic. All rights
        reserved.
      </p>
    </footer>
  )
}
