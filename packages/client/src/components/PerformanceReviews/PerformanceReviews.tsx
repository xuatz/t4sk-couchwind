import * as React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import PerformanceReview from './PerformanceReview';

const PerformanceReviews = () => {
  let { path } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h2>List of Performance Reviews</h2>
          <button onClick={() => history.push(`${path}/create`)}>Create New Review</button>
        </Route>
        <Route path={`${path}/create`}>
          <PerformanceReview />
        </Route>
      </Switch>
    </div>
  );
};

export default PerformanceReviews;
