<h1>Redux Toolkit with React</h1>
<h2>Create a Redux store with configureStore</h2>
<p>
configureStore accepts a reducer function as a named argument
configureStore automatically sets up the store with good default settings</p>
<h2>Provide the Redux store to the React application components</h2>
<p>Put a React-Redux <Provider> component around your <App />
Pass the Redux store as <Provider store={store}></p>
<h2>
Create a Redux "slice" reducer with createSlice</h2>
<p>
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using Immer
Export the generated slice reducer and action creators</p>
<h2>Use the React-Redux useSelector/useDispatch hooks in React components
</h2>
<p>Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed</p>


