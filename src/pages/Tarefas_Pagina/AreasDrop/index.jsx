import DroppableSpace from '../../../components/DroppableSpace'
import Card from '../../../components/Card';
import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { Botao } from '../../../styles/GeneralUseComponents';
import React, { useEffect, useRef } from 'react';


function AreasDrop() {
    const hoz = "525px";
    const ver = "700px";

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tarefasGet')
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);
                setCards(data);
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    /*
    const cardsAtualizados = useRef([]);; //é atualizado antes de usar
    */

    function atualizarTarefasNoBackend(cardsAtualizados) {
        console.log("Atualizando tarefas no backend:", cardsAtualizados);
        if (!cardsAtualizados || cardsAtualizados.length === 0) {
            console.log("Nenhuma tarefa para atualizar.");
            alert("Nenhuma tarefa para atualizar.");
            return;
        }

        var result = window.confirm("Deseja atualizar as tarefas no backend?");
        if (!result) {
            return;
        }
        cardsAtualizados.forEach(card => {
            const { id, nome, texto, area } = card;
            fetch(`http://localhost:3001/tarefasUpdate/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, texto, area })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Tarefa atualizada:', data);
            })
            .catch(error => {
                console.error('Erro ao atualizar tarefa:', error);
            });
        });

    }

    /*
    const [cards, setCards] = useState([
        {
            id: "card1",
            nome: "Tarefa 1",
            texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
            area: "NaoIniciadas"
        },
        {
            id: "card2",
            nome: "Tarefa 2",
            texto: "Segunda tarefa",
            area: "NaoIniciadas"
        },
        {
            id: "card3",
            nome: "Tarefa 3",
            texto: "Terceira tarefa",
            area: "EmDesenvolvimento"
        }
    ]);
    */

    

    return (
        <>
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <DragDropProvider
                    onDragEnd={(event) => {
                        const { operation } = event;

                        if (!operation?.target) return;

                        //

                        setCards((prev) => {
                            const novosCards = prev.map(card =>
                                card.id === operation.source.id
                                    ? { ...card, area: operation.target.id }
                                    : card
                            );

                            //cardsAtualizados.current = novosCards;

                            //console.log(cardsAtualizados);

                            return novosCards;
                        });
                    }}
                >
                    <div style={{ display: "flex", gap: "20px" }}>

                        <DroppableSpace
                            id="NaoIniciadas"
                            horizontal={hoz}
                            vertical={ver}
                            backcolor={"hsl(0, 100%, 85%)"}
                        >
                            {cards
                                .filter(card => card.area === "NaoIniciadas")
                                .map(card => (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        Nome_Card={card.nome}
                                        Texto_Card={card.texto}
                                    />
                                ))}
                        </DroppableSpace>

                        <DroppableSpace
                            id="EmDesenvolvimento"
                            horizontal={hoz}
                            vertical={ver}
                            backcolor={"hsl(240, 100%, 85%)"}
                        >
                            {cards
                                .filter(card => card.area === "EmDesenvolvimento")
                                .map(card => (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        Nome_Card={card.nome}
                                        Texto_Card={card.texto}
                                    />
                                ))}
                        </DroppableSpace>

                        <DroppableSpace
                            id="Concluidas"
                            horizontal={hoz}
                            vertical={ver}
                            backcolor={"hsl(147, 100%, 85%)"}
                        >
                            {cards
                                .filter(card => card.area === "Concluidas")
                                .map(card => (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        Nome_Card={card.nome}
                                        Texto_Card={card.texto}
                                    />
                                ))}
                        </DroppableSpace>

                    </div>
                </DragDropProvider>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}} >
                <Botao style={{ left: 756 }} onClick={() => atualizarTarefasNoBackend(cards)}>
                    Salvar
                </Botao>
            </div>
        </>
    )
}

export default AreasDrop;