import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import MainScreen from './screens/MainScreen'
import BookDetailsScreen from './screens/BookDetailsScreen'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact component={MainScreen} path='/'/>
        <Route exact component={BookDetailsScreen} path='/book/:id'/>
      </Container>
    </Router>
  );
}

export default App;
