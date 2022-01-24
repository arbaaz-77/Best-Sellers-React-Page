import React from "react";
import ReactDom from "react-dom";

import { books } from "./Books";
import Book from "./Book";
import Heading from "./Heading";

//CSS
import "./index.css";

function BookList() {
  return (
    <main>
      <Heading />
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </main>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
