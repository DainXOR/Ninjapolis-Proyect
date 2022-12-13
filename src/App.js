import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

// Componentes / paginas
import Login from './componentes/login/Login';
import Register from './componentes/register/register';
import NotFound from './componentes/NotFound';
import PaginaPrincipal from './componentes/paginaPrincipal/PaginaPrincipal';
// Aldeas
import Sunagakure from './componentes/secciones/aldeas/Sunagakure';
import Iwagakure from './componentes/secciones/aldeas/Iwagakure';
import Konoha from './componentes/secciones/aldeas/Konoha';
import Kirigakure from './componentes/secciones/aldeas/Kirigakure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/paginaPrincipal" element={<PaginaPrincipal/>} />
          <Route exct path="/aldeas/sunagakure" element={<Sunagakure/>}/>
          <Route exct path="/aldeas/iwagakure" element={<Iwagakure/>}/>
          <Route exct path="/aldeas/kirigakure" element={<Kirigakure/>}/>
          <Route exct path="/aldeas/konoha" element={<Konoha/>}/>

        <Route exact path="/notFound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
