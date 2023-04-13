import "./Header.css";
import { Button } from "./UI/Button";

export const Header = ({ openModal }) => {
  return (
    <div className="headerContainer">
      <div className="headerContainer">
        <h2 className="header">Favorite Movies</h2>
        <Button onClick={openModal} className={"buttonn"} bgcolor={"#ff0000"}>
          ADD MOVIE
        </Button>
      </div>
    </div>
  );
};
