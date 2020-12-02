import * as React from 'react';
import { useParams } from 'react-router-dom';
import BasicForm from '../BasicForm';
import { useEmployees } from './useEmployees';

const Employee = () => {
  let { id } = useParams<{ id: string }>();
  const { getEmployee } = useEmployees();
  const employee = getEmployee(id);

  return (
    <div>
      <h2>{employee?.name || 'This employee does not exist!'}</h2>
      <BasicForm
        primaryActionText="Create"
        viewOnly
        fields={[
          {
            name: 'name',
            type: 'text',
            value: employee?.name,
          },
        ]}
      />
    </div>
  );
};

export default Employee;
