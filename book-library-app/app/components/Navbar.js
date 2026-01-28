import { Book, Plus } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Book className="text-blue-600" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Book Library</h1>
              <p className="text-sm text-gray-500">Manage your collection</p>
            </div>
          </div>
          
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={18} />
            Add Book
          </button>
        </div>
      </div>
    </nav>
  )
}