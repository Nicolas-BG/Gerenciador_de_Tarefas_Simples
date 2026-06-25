import { HeaderFlex, NomePagina } from './HeaderStyle.js'
import React, { useState } from 'react';

function Header({ pagina }) {
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
        color: 'blue'
    }


    return (
        <HeaderFlex>
            <NomePagina style = {HomeAtivo ? styleAlt : style}><a href="#"></a>Home</NomePagina>
            <NomePagina style = {TarefasAtivo ? styleAlt : style}><a href="#"></a>Tarefas</NomePagina>
            <NomePagina style = {AddAtivo ? styleAlt : style}><a href="#"></a>Adicionar Tarefa</NomePagina>
            <NomePagina style = {ContatosAtivo ? styleAlt : style}><a href="#"></a>Contatos</NomePagina>
        </HeaderFlex>
    );


}

export default Header;