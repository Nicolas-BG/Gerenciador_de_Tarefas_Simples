import style from 'styled-components';

export const Card_class = style.div `
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 10px;
    box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.1);
    padding: 20px;
    margin: 10px;
    text-align:center;
    width: 200px;
    max-width: 200px;
    display: inline-block;
    vertical-align: top;

    background-color: white;

    height: 200px;
    max-height: 200px;
    user-select: none;

`

export const Linha_div = style.div `
    width: 100%;
    height: 5px;
    background-color: blue;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Card_Title = style.h2 `
    font-family: Arial, sans-serif;
    margin: 10px;
    color: blue;
    
    width: 180px;
    height: 30px;

    &:hover {
        color: hsl(233, 100%, 73%);
    }

    &:active {
        color: hsl(233, 100%, 73%);
    }

`

export const Card_Text = style.p `
    margin: 10px;
    font-family: Arial, sans-serif;
    color: hsl(233, 100%, 65%);
    width: 180px;
    height: 110px;

    text-align: left;

    white-space: pre-wrap;
    overflow: auto;

    
`

export const BotaoDelete = style.button`
    height: 25px;
    font-size: 14px;
    font-weight: bold;
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