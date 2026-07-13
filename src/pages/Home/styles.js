import style from 'styled-components';

export const Title = style.h1 `
    color: blue;
    margin-top: 30px;
`
export const Texto = style.p `
    color: blue;
    font-size: 20px;
    margin: 5px;
`



export const Bold = style.span `
    font-weight: 900;
`

export const Link = style.a `
    color: blue;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: hsl(240, 100%, 67%);
    }
`


export const Texto_Lista = style.li `
    color: blue;
    font-size: 20px;
    margin: 5px;
`