import React from "react";
import ReactDOM from "react-dom";

// stateless functional components
// always returns JSX

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/41yzMkY-+vL._AC_SX184_.jpg"
    alt="book"
  ></img>
);

const Title = () => {
  return (
    <h1>
      Life Force: How New Breakthroughs in Precision Medicine Can Transform the
      Quality of Your Life & Those You Love
    </h1>
  );
};

const Author = () => <p>Peter H. Diamandis, Robert Hariri</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
