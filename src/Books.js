import React, {useState} from 'react'

const Books = () => {
    const [books, setBooks] = useState([
        {title: "Anna", publish: "2020", author:"Leo"},
        {title: "Dune", publish: "1989", author:"Mark"},
        {title: "Moon", publish: "1898", author:"Leo"}
    ])
  return (
    <div>
        {books.map(book => <div>title: {book.title}, &nbsp; publish: {book.publish}, author:{book.author} </div>)}
    </div>
  )
}

export default Books