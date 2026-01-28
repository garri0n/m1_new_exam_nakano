'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, BookOpen, TrendingUp, Users, Calendar, RefreshCw } from 'lucide-react'
import BookCard from './components/BookCard'
import { fetchBooks } from './lib/bookService'

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    setLoading(true)
    try {
      const data = await fetchBooks()
      setBooks(data)
    } catch (error) {
      console.error('Error loading books:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                         book.author.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || book.genre === filter
    
    return matchesSearch && matchesFilter
  })

  const genres = ['all', 'fiction', 'dystopian', 'fantasy', 'romance']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Book Library Manager</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Browse and manage your book collection. Search thousands of books from our API.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="stat-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
              <BookOpen className="text-blue-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{books.length}</div>
            <p className="text-gray-600">Total Books</p>
          </div>
          
          <div className="stat-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {books.filter(b => b.rating >= 4).length}
            </div>
            <p className="text-gray-600">Highly Rated</p>
          </div>
          
          <div className="stat-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
              <Users className="text-purple-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {[...new Set(books.map(b => b.author))].length}
            </div>
            <p className="text-gray-600">Unique Authors</p>
          </div>
          
          <div className="stat-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-3">
              <Calendar className="text-orange-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {books.filter(b => b.year >= 2020).length}
            </div>
            <p className="text-gray-600">Recent Books</p>
          </div>
        </div>

        {/* Search Box and Filter Section */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Books
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title or author..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Genre
              </label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-800"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              onClick={loadBooks}
              className="btn btn-primary flex items-center gap-2"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredBooks.length} of {books.length} books
          </div>
        </div>

        {/* Books Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Collection</h2>
            <div className="text-sm text-gray-500">
              {loading ? 'Loading...' : `${filteredBooks.length} books found`}
            </div>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading books from API...</p>
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="card text-center py-12">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No books found</h3>
              <p className="text-gray-600">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">App Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">REST API Integration</h3>
              <p className="text-gray-600">
                Fetches real book data from external APIs with automatic updates.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Responsive Design</h3>
              <p className="text-gray-600">
                Fully responsive layout that works perfectly on mobile, tablet, and desktop.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Professional UI</h3>
              <p className="text-gray-600">
                Clean, modern interface built with Tailwind CSS and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}