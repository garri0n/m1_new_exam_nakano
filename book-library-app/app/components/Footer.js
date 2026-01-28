export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium">Book Library Manager</p>
            <p className="text-gray-400 text-sm">The best place to look for your favorite book!</p>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 Book Library Manager M1 SA Nakano</p>
            <p>Demonstrating REST API Integration</p>
          </div>
        </div>
      </div>
    </footer>
  )
}