import "./Modalka.css";
import { Button } from "../UI/Button";
import { Input } from "../UI/Inputs";
import { useState } from "react";
export const Modalka = ({ onClick, addToDoHandler }) => {
  const [inputMovieName, setInputMovieName] = useState("");
  const [inputRating, setInputRating] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  function getMovieNameValue(e) {
    setInputMovieName(e.target.value);
  }

  function getRating(e) {
    setInputRating(e.target.value);
  }

  function getUrl(e) {
    setInputUrl(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const movies = {
      id: new Date().toString(),
      title: inputMovieName,
      rating: +inputRating,
      url: inputUrl,
    };

    addToDoHandler(movies);

    setInputMovieName("");
    setInputRating("");
    setInputUrl("");

    onClick();
  }

  return (
    <div className="modalka">
      <h2>Add your favorite Movie</h2>
      <Input
        className="inputt"
        type="text"
        placeholder=" Add the Favorite"
        onChange={getMovieNameValue}
      />
      <Input
        className="inputt"
        type="number"
        placeholder="Enter your Rating"
        onChange={getRating}
      />
      <Input
        className="inputt"
        type="url"
        placeholder="Add your URL"
        onChange={getUrl}
      />
      <div style={{ display: "flex", gap: "39px" }}>
        <Button bgcolor={"blue"} className={"button"} onClick={onClick}>
          Cancel
        </Button>
        <Button
          className={"button"}
          bgcolor={"#ff0000"}
          onClick={submitHandler}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
