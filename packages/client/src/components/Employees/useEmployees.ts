import axios from 'axios';
import { useReducer } from 'react';
import { useAsync } from 'react-use';

export type EmployeeState = {
  id: string;
  name: string;
  isAdmin: boolean;
};

const initialState: EmployeeState[] = [];

function reducer(state: EmployeeState[], action: any) {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.payload as EmployeeState[];
    case 'ADD_EMPLOYEE':
      return state.concat(action.payload);
    case 'UPDATE_EMPLOYEE':
    case 'REMOVE_EMPLOYEE':
    default:
      return state;
  }
}

export function useEmployees() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useAsync(async () => {
    const { status, data } = await axios.get('http://localhost:8080/api/users');
    if (status === 200) {
      dispatch({ type: 'SET_EMPLOYEES', payload: data });
    }
  });

  return {
    employees: state,
    addEmployee: (employee: EmployeeState) => dispatch({ type: 'ADD_EMPLOYEE', payload: employee }),
    getEmployee: (id: EmployeeState['id']) => state.find((employee) => employee.id === id),
  };
}
