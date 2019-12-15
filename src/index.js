import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)
