import { Card_class, Linha_div, Card_Title, Card_Text } from "./CardStyle";
import {useDraggable} from '@dnd-kit/react';


function Card({ id, Nome_Card, Texto_Card }) {
    const { ref } = useDraggable({
        id,
    });


    return(
        <>
            <Card_class ref={ref}>
                <Card_Title>{Nome_Card}</Card_Title>
                <Linha_div></Linha_div>
                <Card_Text>{Texto_Card}</Card_Text>
            </Card_class>
        </>
    );
}

export default Card;