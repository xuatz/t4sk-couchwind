import * as React from 'react';
import BasicForm from './BasicForm';

const LoginForm = () => {
  return (
    <div>
      <BasicForm
        primaryActionText="Login"
        fields={[
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'password',
            type: 'password',
          },
        ]}
      />
    </div>
  );
};

export default LoginForm;
