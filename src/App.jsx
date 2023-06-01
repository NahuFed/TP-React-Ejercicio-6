
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioColor from './components/FormularioColor';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <>
    <Container className='main mt-5'>
      <FormularioColor></FormularioColor>
    </Container>
    <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer>     

    </>
  )
}

export default App
