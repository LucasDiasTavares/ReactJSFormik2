import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik initialValues={{ firstName: '', lastName: '' }} onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // Fazer uma chamada async da API
        console.log(data);
        setSubmitting(false);
      }} >

        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field placeholder='firstName' name="firstName" type="input" as={TextField} />
            </div>
            <div>
              <Field placeholder='lastName' name="lastName" type="input" as={TextField} />
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <div>
              <Button disabled={isSubmitting} type="submit">Enviar</Button>
            </div>

          </Form>
        )}

      </Formik>
    </div>
  );
}

export default App;
