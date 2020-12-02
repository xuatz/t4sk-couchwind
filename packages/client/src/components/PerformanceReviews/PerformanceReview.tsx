import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import BasicForm from '../BasicForm';
import { useEmployees } from '../Employees/useEmployees';

const PerformanceReview = ({ viewOnly }: { viewOnly?: boolean }) => {
  const { path } = useRouteMatch();
  const { employees } = useEmployees();

  const options = employees.flatMap((e) => ({
    value: e.id,
    label: e.name,
  }));

  return (
    <div>
      <h2>Create New Performance Review</h2>
      <BasicForm
        primaryActionText="Create"
        {...(!path.endsWith('/create') && {
          viewOnly,
        })}
        viewOnly={viewOnly}
        fields={[
          {
            name: 'reviewee',
            type: 'select',
            options,
          },
          {
            name: 'assignees',
            type: 'select',
            options,
            params: {
              isMulti: true,
            },
          },
          {
            name: 'description',
            type: 'textarea',
          },
        ]}
      />
    </div>
  );
};

export default PerformanceReview;
