import React, { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

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

function SingleQuote() {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default SingleQuote;
