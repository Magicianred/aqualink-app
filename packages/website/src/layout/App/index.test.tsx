import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

test("renders as expected", () => {
  const { container } = render(
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>Homepage</div>} />
        <Route path="/reefs" component={() => <div>Reefs</div>} />
        <Route default component={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
  expect(container).toMatchSnapshot();
});