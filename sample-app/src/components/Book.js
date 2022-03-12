import "./books.css";

const Books = (props) => {
  const getBook = props;

  const clickHandler = () => {
    alert("Hey! Do you really want to click these button?");
    console.log("You clicked the button!!");
  };

  const anotherClickHandler = (author) => {
    console.log(author);
  };

  return (
    <article>
      <img src={getBook.img} alt="book" />
      <h2 onClick={() => console.log(getBook.title)}>{getBook.title}</h2>
      <p>{getBook.author}</p>
      <button onClick={clickHandler}>Click Here!</button>
      <button onClick={() => anotherClickHandler(getBook.author)}>
        Again Click Here!
      </button>
    </article>
  );
};

export default Books;
