const sampleBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "fiction",
    rating: 4.2,
    description: "A classic novel of the Jazz Age, exploring themes of idealism, resistance to change, and excess."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "fiction",
    rating: 4.3,
    description: "A novel about racial injustice and the loss of innocence in the American South."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "dystopian",
    rating: 4.5,
    description: "A dystopian social science fiction novel about totalitarian surveillance."
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "fantasy",
    rating: 4.7,
    description: "A fantasy novel about the adventures of hobbit Bilbo Baggins."
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "romance",
    rating: 4.4,
    description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet."
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "fiction",
    rating: 3.8,
    description: "A story about Holden Caulfield's experiences in New York City after being expelled from prep school."
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "fantasy",
    rating: 4.6,
    description: "The first novel in the Harry Potter series, following Harry Potter's first year at Hogwarts."
  },
  {
    id: 8,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "fiction",
    rating: 3.9,
    description: "A mystery thriller novel that follows symbologist Robert Langdon after a murder in the Louvre Museum."
  }
]

export async function fetchBooks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sampleBooks)
    }, 500)
  })
}