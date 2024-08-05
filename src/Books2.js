import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Books2 = () => {
    const [books, setBooks] = useState([
        { title: "Anna", publish: "2020", author: "Leo" },
        { title: "Dune", publish: "1989", author: "Mark" },
        { title: "Moon", publish: "1898", author: "Leo" }
    ]);

    return (
        <div className="container mt-4">
            <div className="row">
                {books.map((book, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{book.publish}</h6>
                                <p className="card-text">Author: {book.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books2;
