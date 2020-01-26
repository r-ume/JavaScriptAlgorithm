import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './styles/App.css'
import MovieIndex from './components/pages/movie-index'
import TodosIndex from './components/pages/todos-index'

// <= ヒットしなかった時用のページを追加
const page404 = () => (
  <div>
    <h1>404</h1>
    <p>not found</p>
  </div>
)

const App = () => {
  const liStyle = {
    display: 'inline',
    width: '100px',
  }

  return (
    <Router>
      <div>
        <ul style={{ display: 'flex' }}>
          <li style={liStyle}>
            <Link to="/movies">top</Link>
          </li>
          <li style={liStyle}>
            <Link to="/todos">todos</Link>
          </li>
        </ul>

        <div>
          <Switch>
            <Route path="/movies" exact component={MovieIndex} />
            <Route path="/todos" exact component={TodosIndex} />
            <Route exact component={page404} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
