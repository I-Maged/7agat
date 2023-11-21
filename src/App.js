import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import About from './pages/About'
import BasicUnits from './pages/BasicUnits'

const App = () => {
  return (
    <div className='body'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/basic'
            element={<BasicUnits />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
