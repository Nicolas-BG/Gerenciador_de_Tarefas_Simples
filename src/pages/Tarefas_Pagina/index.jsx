import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Divisoria, H1padronizado } from './TarefasStyle';

import AreasDrop from './AreasDrop';


function Tarefas_Pagina() {    

    
    return (
        <div>
            <Header pagina={2}></Header>            
            <div style={{display: "flex", width:"100%", justifyContent: "center"}}>
                <H1padronizado>Tarefas não iniciadas</H1padronizado>
                <Divisoria></Divisoria> 
                <H1padronizado>Tarefas em desenvolvimento</H1padronizado>
                <Divisoria></Divisoria> 
                <H1padronizado>Tarefas concluídas</H1padronizado>
            </div>            
            <AreasDrop></AreasDrop>           
            

            <Footer></Footer>
        </div>
    )
}

export default Tarefas_Pagina; 