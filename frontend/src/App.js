import './App.css'
import BookList from './components/BookList'
import Header from './components/layouts/Header'
import { Container } from 'react-bootstrap'
import AddBook from './components/AddBook'

function App() {
  return (
    <>
      <Header />
      <Container>
        <AddBook />
        <BookList />
      </Container>
    </>
  );
}

export default App;
