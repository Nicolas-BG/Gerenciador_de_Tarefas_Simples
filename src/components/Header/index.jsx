import { HeaderFlex, NomePagina } from './HeaderStyle.js'
import { useNavigate } from 'react-router-dom';

function Header({ pagina }) {
    const navigate = useNavigate();
    
    var HomeAtivo  = false;
    var TarefasAtivo = false;
    var AddAtivo = false;
    var ContatosAtivo = false

    if (pagina == 1){
        HomeAtivo = true;
    } else if (pagina == 2){
        TarefasAtivo = true;
    } else if (pagina == 3){
        AddAtivo = true;
    } else {
        ContatosAtivo = true;
    }
    

    const style = {
    }
    
    const styleAlt = {
        backgroundColor: 'white',
        color: 'blue',
        cursor: 'default'
    }


    return (
        <HeaderFlex>
            <NomePagina style = {HomeAtivo ? styleAlt : style} onClick={() => navigate('/')}><a href="/"></a>
                Home      
            </NomePagina>
            <NomePagina style = {TarefasAtivo ? styleAlt : style} onClick={() => navigate('/tarefas')}><a href="/Tarefas"></a>
                Tarefas
            </NomePagina>
            <NomePagina style = {AddAtivo ? styleAlt : style} onClick={() => navigate('/adicionar')}><a href="#"></a>Adicionar Tarefa</NomePagina>
            <NomePagina style = {ContatosAtivo ? styleAlt : style} onClick={() => navigate('/contatos')}><a href="#"></a>Contatos</NomePagina>
        </HeaderFlex>
    );


}

export default Header;