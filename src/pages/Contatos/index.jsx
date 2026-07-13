import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Botao, Centro, CentroVer } from '../../styles/GeneralUseComponents';


function Contatos(){

    return (
        <div>
            <Header pagina={5}></Header>
            <div style={{margin: '15px', color: 'blue'}}>
                <h3>Contatos</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/nicolas-bueno-gazin-9905092b6" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://www.github.com/Nicolas-BG" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li>Email: geloquente0@email.com</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contatos; 