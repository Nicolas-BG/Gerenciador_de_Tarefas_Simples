import style from 'styled-components';

export const Card_class = style.div `
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 10px;
    box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.1);
    padding: 20px;
    margin: 10px;
    text-align:center;
    width: 240px;
    max-width: 240px;
    display: inline-block;

    background-color: white;

    height: 200px;
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
`

export const Card_Text = style.p `
    margin: 10px;
    font-family: Arial, sans-serif;
    color: hsl(233, 100%, 65%);
`