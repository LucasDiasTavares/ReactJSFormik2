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
<hr>

Utilizando `<pre>{JSON.stringify(values, null, 2)}</pre>` Dentro do meu form eu consigo ter um visual do que eu estou digitando e se está sendo utilizado dentro da variável correta, ajuda muito para fazer debug, sem precisar ficar dando submit no form para ver no console.log
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