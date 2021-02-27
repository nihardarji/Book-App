import { Container } from 'react-bootstrap'
import './App.css'
import BookList from './components/BookList'
import Header from './components/layouts/Header'

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
