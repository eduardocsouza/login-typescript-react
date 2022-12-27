import {Routes, Route} from 'react-router-dom';
import Cadastro from '../components/Cadastro';
import Home from '../components/Home';

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
  )
}

export default Routers