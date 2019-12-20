import React from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik initialValues={{ firstName: 'bob' }} onSubmit={(data) => {
        console.log(data);
      }} >

        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} >
            <TextField name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <div>
              <Button type="submit">Enviar</Button>
            </div>

          </form>
        )}

      </Formik>
    </div>
  );
}

export default App;
