import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Employees from './components/Employees/Employees';
import PerformanceReviews from './components/PerformanceReviews/PerformanceReviews';

function App() {
  const isNotLoggedIn = true;

  return (
    <>
      <h1>Super Feedback Submitter</h1>
      {!isNotLoggedIn ? (
        <LoginForm />
      ) : (
        <Router>
          <div>
            <Switch>
              <Route path="/admin/employees">
                <Employees />
              </Route>
              <Route path="/admin/reviews">
                <PerformanceReviews />
              </Route>
              <Route path="/reviews">
                <h2>List of Performance Reviews assigned for feedback</h2>
                <p>Not implemented</p>
              </Route>
              <Redirect to="/reviews" />
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
