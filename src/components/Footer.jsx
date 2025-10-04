export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center mt-8">
      <p>
        &copy; {new Date().getFullYear()} Aberdeen Physio Clinic. All rights
        reserved.
      </p>
      <p className="text-sm">Helping Aberdeen stay active and pain-free.</p>
    </footer>
  )
}
