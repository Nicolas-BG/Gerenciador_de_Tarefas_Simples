import style from 'styled-components';

export const Botao = style.button `
    margin: 10px;
    min-width: 100px;
    padding: 10px;
    height: 50px;
    font-size: 25px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    position: relative;

    &:hover {
        background-color: lightblue;
        border: 1px solid blue;
        cursor: pointer;
    }
`   

export const Centro = style.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CentroVer = style.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`