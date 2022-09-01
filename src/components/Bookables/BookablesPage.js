import BookablesList from "./BookablesList";
import {bookables} from "../../static.json";

export default function BookablesPage () {
  return (
    <main className="bookables-page">
      <BookablesList bookables={bookables}/>
    </main>
  );
}