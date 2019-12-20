import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Checkbox } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik initialValues={{ firstName: '', lastName: '', ageHigherThanEighteen: false, cakes: []}}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // Fazer uma chamada async da API
          console.log(data);
          setSubmitting(false);
        }} >

        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field placeholder='Nome' name="firstName" type="input" as={TextField} />
            </div>
            <div>
              <Field placeholder='Sobrenome' name="lastName" type="input" as={TextField} />
            </div>

            <label>Maior que 18 anos</label>
            <div>
              <Field name='ageHigherThanEighteen' type='checkbox' as={Checkbox} />
            </div>

            <label>Escolha os bolos que deseja comer</label>
            <div>
              <Field name='cakes' value='Chocolate' type='checkbox' as={Checkbox} />
              <Field name='cakes' value='Baunilha' type='checkbox' as={Checkbox} />
              <Field name='cakes' value='Morango' type='checkbox' as={Checkbox} />
              <Field name='cakes' value='Banana' type='checkbox' as={Checkbox} />
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <div>
              <Button disabled={isSubmitting} type="submit">Enviar</Button>
            </div>

          </Form>
        )}

      </Formik>
    </div >
  );
}

export default App;
