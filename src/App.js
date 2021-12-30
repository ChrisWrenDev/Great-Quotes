import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import SingleQuote from "./pages/SingleQuote";

function App() {
  return (
    <Switch>
      <Route path="/quotes/:quoteId">
        <SingleQuote />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
