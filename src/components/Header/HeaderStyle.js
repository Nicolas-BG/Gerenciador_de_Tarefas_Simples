import style from 'styled-components';

export const HeaderFlex = style.div `
    display:flex;
    background-color: blue;
    width: 100%;
    height: 80px;    
    justify-content: center;   

    margin: 0px;
    padding: 0px;
   
`

export const NomePagina = style.h1 `
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
    padding-left: 20px;
    padding-right: 20px;
    height: 80px;
    background-color: blue;
    color: white;
    transition: background-color 0.5s ease; 
    transition: color 0.5s ease;
    

    &:hover {
        background-color: white;
        color: blue;
        cursor: pointer;
    }
    
`