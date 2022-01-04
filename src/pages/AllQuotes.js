import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning is fun!" },
  { id: "q2", author: "Terry", text: "Learning is good for me!" },
  { id: "q3", author: "Brian", text: "Learning React is amazing!" },
  { id: "q4", author: "Jerry", text: "Learning React is better than tv!" },
  {
    id: "q5",
    author: "Martin",
    text: "Learning React is my favourite thing to do!",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
