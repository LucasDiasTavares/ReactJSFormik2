# ReactJS Formik 2+
Estudando ReactJS com Formik Versão 2+, além de usar Material-UI para agilizar na parte visual, estou usando Yup para fazer algumas pequenas validações no formulario.

Estou utilizando:
- [Formik] (https://www.npmjs.com/package/formik)
- [Material-UI] (https://material-ui.com/pt/getting-started/installation/)
- [Yup] (https://www.npmjs.com/package/yup)

<hr>

Ao chamar o componente do Formik eu tenho que passar o initialValues e onSubmit, sempre!

Exemplo:
```javascript
<Formik initialValues={{ firstName: 'bob' }} onSubmit={(data) => {
    console.log(data);
    }} >
```
Entendendo o exemolo:

Se o meu campo precisar começar com algum valor inicial. `initialValues={{ firstName: 'bob' }}`
Caso contrario posso passar ele vazio `initialValues={{ firstName: '' }}`

Quando eu der submit no meu form devo mandar os dados. `onSubmit={(data) => {console.log(data);}} >`

Provavelmente vou estar fazendo uma chamada utilizando async, então eu posso utilizar uma variável SetSubmitting e enquanto eu não receber os dados eu posso desativar o meu botão de submit, este código é uma emplementação do onSubmit logo a cima. (`onSubmit={(data) => {console.log(data);}}`)
```javascript
onSubmit={(data, { setSubmitting }) => {
    setSubmitting(true);
    // Fazer uma chamada async da API
    console.log(data);
    setSubmitting(false);
    }}
```
Enseguida vou até o meu form e faço as seguinte alterações:
```javascript
{({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
    <form onSubmit={handleSubmit} >
    <TextField name='firstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur} />
    <pre>{JSON.stringify(values, null, 2)}</pre>
    <div>
        <Button disable={isSubmitting} type="submit">Enviar</Button>
    </div>
    </form>
)}
```
Passo a variável junto das demais `{ values, isSubmitting, handleChange, handleBlur, handleSubmit }`, e no meu botão utilizo está variavel dentro de uma propriedade do mesmo chamado disable, assim ele irá ativar ou desativar o botão automaticamente `<Button disabled={isSubmitting} type="submit">Enviar</Button>`

<hr>

Agora se eu precisar de vários campos no meu formulário, parar não ficar copiando e colando eu posso utilizar do formik o componente Field `<Field name="firstName" type="input" />`, deste modo estou dizendo ao formik que eu quero um input com name de first name e com todas aquelas propriedades handleChange, handleBlur, handleSubmit e não preciso passar elas manualmente como foi feita no exemplo do TextField. Porém deste modo não estou utilizando Material-UI e eu quero usar, então devo apenas passar como props as={TextField}, `<Field name="firstName" type="input" as={TextField} />` pronto agora tenho um código mais limpo utilizando Material-UI no meu Field.

<hr>

Checkbox:
- Simples checkbox inicializo como `ageHigherThanEighteen: false`. Exemplo do código: `<Field name='ageHigherThanEighteen' type='checkbox' as={Checkbox} />`

- Multiplos checkbox inicializo como `cake: [] `. Então para cada checkbox eu crio com o mesmo name='cakes', extremamente importante que o name sejam iguais e conforme for criando novos Field só ir alterando o value: value='banana', value='morango', value='etc'. Exemplo do código: `<Field name='cakes' value='Chocolate' type='checkbox' as={Checkbox} />`

Radio:
- Para criar um Radio button ele é inicializado `day: ''`, como fosse um campo normal. Então para cada radio eu crio com o mesmo name='day', extremamente importante que o name sejam iguais e conforme for criando novos Field só ir alterando o value: value='Segunda', value='Terça', value='etc'. Exemplo do código: `<Field name='day' value='Segunda' type='radio' as={Radio} />`

<hr>

Utilizando `<pre>{JSON.stringify(values, null, 2)}</pre>` Dentro do meu form eu consigo ter um visual do que eu estou digitando e se está sendo utilizado dentro da variável correta, ajuda muito para fazer debug, sem precisar ficar dando submit no form para ver no console.log

<hr>

Alterando o meu form para um Form do formik deste modo não preciso mais ficar especificando as variáveis handleChange, handleBlur, handleSubmit ele já tem elas por padrão e fica mais padronizado o código.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.