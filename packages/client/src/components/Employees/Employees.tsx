import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { useEmployees, EmployeeState } from './useEmployees';

const AddEmployee = ({ addEmployee }: { addEmployee: (employee: EmployeeState) => void }) => {
  const [name, setName] = React.useState('');

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEmployee = { name };

    try {
      const { status, data } = await axios.post('http://localhost:8080/api/users', newEmployee);

      switch (status) {
        case 200:
          console.log('xz:data', data);
          addEmployee(data);
          setName('');
          break;
        default:
          break;
      }
    } catch {
      console.log('There was a problem with creating a new employee.');
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input placeholder="Add new employee" type="string" onChange={(e) => setName(e.target.value)} value={name} />
      <input type="submit" value="Create" />
    </form>
  );
};

const Employees = () => {
  let { path } = useRouteMatch();

  const { employees, addEmployee } = useEmployees();

  function navigateToEmployeePage(employeeID: EmployeeState['id']) {
    // history.push(`${path}/${employeeID}`);
  }

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h2>List of Employees</h2>

          <AddEmployee addEmployee={addEmployee} />

          <ol>
            {employees?.map(({ id, name }) => (
              <li onClick={() => navigateToEmployeePage(id)} key={id}>
                {name}
              </li>
            ))}
          </ol>
        </Route>
      </Switch>
    </div>
  );
};

export default Employees;
