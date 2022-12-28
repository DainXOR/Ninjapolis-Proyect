import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

// Componentes / paginas
import Login from './componentes/login/Login';
import Register from './componentes/register/register';
import NotFound from './componentes/NotFound';
import PaginaPrincipal from './componentes/paginaPrincipal/PaginaPrincipal';
import Autogestion from './componentes/secciones/autogestion/Autogestion';
import Perfil from './componentes/secciones/perfil/Perfil';
import Shop from './componentes/secciones/shop_page/shop';

import ShopHeadItems from './componentes/secciones/shop_page/subpages/head_items/head_items_page';
import ShopFaceItems from './componentes/secciones/shop_page/subpages/face_items/face_items_page';

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
          <Route exact path="/paginaPrincipal/gestion" element={<Autogestion/>} />
          <Route exact path="/paginaPrincipal/perfil" element={<Perfil/>} />
          <Route exact path="/paginaPrincipal/shop/main" element={<Shop/>} />
            <Route exact path="/paginaPrincipal/shop/head" element={<ShopHeadItems/>} />
            <Route exact path="/paginaPrincipal/shop/face" element={<ShopFaceItems/>} />


          <Route exact path="/aldeas/sunagakure" element={<Sunagakure/>}/>
          <Route exact path="/aldeas/iwagakure" element={<Iwagakure/>}/>
          <Route exact path="/aldeas/kirigakure" element={<Kirigakure/>}/>
          <Route exact path="/aldeas/konoha" element={<Konoha/>}/>
        <Route exact path="/notFound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
