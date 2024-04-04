import { useState } from "react";
import "./App.css";
import BookCarousel from "./components/Carousel";
import { Children } from "./typees/children";

function App() {
  const bookCardPrices: Children = {
    bookList: [
      [39, "https://static-no.bookis.com/books/75355/medium.jpg", true, true],
      [175, "https://static-no.bookis.com/books/1372887/medium.jpg", true, false],
      [20, "https://static-no.bookis.com/books/219113/medium.jpg", false, false],
      [20, "https://static-no.bookis.com/books/136847/medium.jpg", true, false],
      [150, "https://static-no.bookis.com/books/1310892/medium.jpg", true, false],
      [20, "https://static-no.bookis.com/books/1110248/medium.jpg", false, false],
      [85, "https://static-no.bookis.com/books/656744/medium.jpg", true, false],
    ],
  };

  const [index, updateIndex] = useState(0);

  const handleNext = () => {
    updateIndex(index + 1);
    console.log("index", index);
  };

  const handlePrev = () => {
    if (index > 0) {
      updateIndex(index - 1);
    }
  };

  return (
    <>
      <BookCarousel
        children={bookCardPrices}
        booksShown={9}
        index={index}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}

export default App;
