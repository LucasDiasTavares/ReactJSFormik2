import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Checkbox, Radio } from '@material-ui/core';


const App: React.FC = () => {
  return (
    <div>
      <Formik initialValues={{ firstName: '', lastName: '', ageHigherThanEighteen: false, cakes: [], day: '' }}
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


            <div>
              <label>Maior que 18 anos</label>
              <Field name='ageHigherThanEighteen' type='checkbox' as={Checkbox} />
            </div>

            <div>Escolha os bolos que deseja comer</div>
            <div>
              <label>Chocolate</label>
              <Field name='cakes' value='Chocolate' type='checkbox' as={Checkbox} />
              <label>Baunilha</label>
              <Field name='cakes' value='Baunilha' type='checkbox' as={Checkbox} />
              <label>Morango</label>
              <Field name='cakes' value='Morango' type='checkbox' as={Checkbox} />
              <label>Banana</label>
              <Field name='cakes' value='Banana' type='checkbox' as={Checkbox} />
            </div>

            <div>Escolha o dia da entrega</div>
            <div>
              <label>Segunda</label>
              <Field name='day' value='Segunda' type='radio' as={Radio} />
              <label>Terça</label>
              <Field name='day' value='Terça' type='radio' as={Radio} />
              <label>Quarta</label>
              <Field name='day' value='Quarta' type='radio' as={Radio} />
              <label>Quinta</label>
              <Field name='day' value='Quinta' type='radio' as={Radio} />
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
