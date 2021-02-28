import './App.css'
import BookList from './components/BookList'
import Header from './components/layouts/Header'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header />
      <Container>
        <BookList />
      </Container>
    </>
  );
}

export default App;
