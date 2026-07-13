import { Card_class, Linha_div, Card_Title, Card_Text, BotaoDelete } from "./CardStyle";
import { useDraggable } from '@dnd-kit/react';
import React from 'react';



function Card({ id, Nome_Card, Texto_Card }) {
    const {
        ref,
        handleRef,
        listeners,
        attributes
    } = useDraggable({ id });

    function DeleteCard(id_card) {
        var result = window.confirm(`Deseja deletar a tarefa - ${Nome_Card} - do backend?`);
        if (!result) {
            return;
        }
        fetch(`http://localhost:3001/tarefasDelete/${id_card}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Tarefa deletada:', data);
                alert(`Tarefa - ${Nome_Card} - deletada com sucesso!`);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao deletar tarefa:', error);
            });
    }

    return (
        <Card_class ref={ref}>
            <Card_Title
                ref={handleRef}
                {...listeners}
                {...attributes}
                style={{ cursor: "grab" }}
            >
                {Nome_Card}
            </Card_Title>

            <Linha_div />
            <Card_Text>{Texto_Card}</Card_Text>
            <BotaoDelete style={{left: '40%'}} onClick={() => DeleteCard(id)}>Deletar</BotaoDelete>
        </Card_class>
    );
}

export default Card;