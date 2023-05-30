
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioColor from './components/FormularioColor';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <>
    <Container className='mt-5'>
      <FormularioColor></FormularioColor>
    </Container>
    </>
  )
}

export default App
