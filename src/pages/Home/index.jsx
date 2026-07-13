import { Title, Texto, Bold, Link, Texto_Lista } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Botao, Centro, CentroVer } from '../../styles/GeneralUseComponents';
import React, { useState } from 'react';

function Home({variavelzinha}){
    const [count, setCount] = useState(0);
    const [imagemAparece, setImagemAparece] = useState(-1);

    return (
        <>
            <Header pagina={1}></Header>
            <CentroVer>
                <Title> Bem vindo ao site gerenciador de tarefas do {variavelzinha} </Title>
                <Texto>Essa é aba Home, há outras abas como: </Texto>
                <ul>
                    <Texto_Lista>A aba <Bold><Link href="/tarefas">Tarefas</Link></Bold>, onde você pode ver suas tarefas, organiza-las e deleta-las;</Texto_Lista>
                    <Texto_Lista>A aba <Bold><Link href="/adicionar">Adicionar Tarefa</Link></Bold>, onde você pode adicionar novas tarefas;</Texto_Lista>
                    <Texto_Lista>A aba <Bold><Link href="/extra">Extra</Link></Bold>, onde você pode ver um conteúdo extra que o dev colocou;</Texto_Lista>
                    <Texto_Lista>A aba <Bold><Link href="/contatos">Contatos</Link></Bold>, onde você pode ver os contatos do dev.</Texto_Lista>
                </ul>
            </CentroVer>            
        </>
    )
}

export default Home; 

//{imagemAparece == 1 ? ( ... ) : null