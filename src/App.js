import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';

// Componentes / paginas
import Login from './componentes/login/Login';
import Register from './componentes/register/register';
import NotFound from './componentes/NotFound';
import PaginaPrincipal from './componentes/paginaPrincipal/PaginaPrincipal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>

        <Route exact path="/register" element={<Register/>}/>
        
        <Route exact path="/paginaPrincipal" element={<PaginaPrincipal/>} />

        <Route exact path="/notFound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
