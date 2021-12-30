import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

function SingleQuote() {
  const params = useParams();
  return (
    <Fragment>
      <h1>Single Quote</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default SingleQuote;
