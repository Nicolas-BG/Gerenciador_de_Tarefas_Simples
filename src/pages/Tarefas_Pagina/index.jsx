import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AreasDrop from './AreasDrop';


function Tarefas_Pagina() {    

    
    return (
        <div>
            <Header pagina={2}></Header>            

            <div style={{display: "flex", width:"100%", justifyContent: "center"}}>
                <AreasDrop></AreasDrop>           
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Tarefas_Pagina; 