import "./index.css";
import Book from "./basics/components/Book";

const App = () => {
  const books = [
    {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/I/41D3enj6JVS._AC_SX184_.jpg",
      title:
        "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
      author: "Bessel van der Kolk M.D.",
    },
    {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/I/41yzMkY-+vL._AC_SX184_.jpg",
      title:
        "Life Force: How New Breakthroughs in Precision Medicine Can Transform the Quality of Your Life & Those You Love",
      author: "Peter H. Diamandis, Robert Hariri",
    },
  ];

  // stateless functional components
  // always returns JSX

  return (
    <div>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </div>
  );
};

export default App;
