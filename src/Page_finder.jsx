import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tarefas_Pagina from './pages/Tarefas_Pagina';
import Adicionar_Pagina from './pages/Adicionar_Pagina';
import Contatos from './pages/Contatos';


function Page_finder(){

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/tarefas" element={<Tarefas_Pagina/>} />
                <Route path="/adicionar" element={<Adicionar_Pagina/>} />
                <Route path="/contatos" element={<Contatos/>} />
            </Routes>
        </Router>
    )
}

export default Page_finder; 