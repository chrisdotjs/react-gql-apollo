import logo from './logo.svg';
import './App.css';
import { GET_TODOS } from './graphql/query'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client"
import moment from 'moment'

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: </p>

  return data.getTodos.map(({ id, title, detail, date }) => (
    <div>
      <p>
        "title": {title}, 
        <br></br>
        "detail": {detail}, 
        <br></br>
        "date": {date}
      </p>
    </div>
  ))
}

function Welcome() {
  return (
    <div>
      <h4>My first React Apollo App 🚀!</h4>
      <h5>Live Todos from MongoDB Atlas:</h5>
      <GetTodos />
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Welcome />
    </header>
    <h3>Hello from the body!</h3>
  </div>
  );
}

export default App;
