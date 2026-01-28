import { BookOpen, Calendar, User, Star } from 'lucide-react'

export default function BookCard({ book }) {
  return (
    <div className="card">
      <div className="flex items-start gap-4">
        <div className="w-24 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
          <BookOpen className="text-blue-600" size={40} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
          <p className="text-gray-600 mt-1">by {book.author}</p>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{book.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{book.genre}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" />
              <span>{book.rating}/5</span>
            </div>
          </div>
          
          <p className="mt-3 text-gray-700 line-clamp-2">{book.description}</p>
          
          <div className="flex gap-2 mt-4">
            <button className="btn btn-primary text-sm">View Details</button>
            <button className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 text-sm">
              Add to Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}