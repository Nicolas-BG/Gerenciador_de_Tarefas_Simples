import DroppableSpace from '../../../components/DroppableSpace'
import Card from '../../../components/Card';
import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';


function AreasDrop() {
    const hoz = "610px";
    const ver = "800px";


    const [cards, setCards] = useState([
        {
            id: "card1",
            nome: "Tarefa 1",
            texto: "Primeira tarefa Filho da puta",
            area: "area1"
        },
        {
            id: "card2",
            nome: "Tarefa 2",
            texto: "Segunda tarefa",
            area: "area1"
        },
        {
            id: "card3",
            nome: "Tarefa 3",
            texto: "Terceira tarefa",
            area: "area2"
        }
    ]);

    return (
        <>
            <DragDropProvider
                onDragEnd={(event) => {
                    const { operation } = event;

                    if (!operation?.target) return;

                    setCards((prev) =>
                        prev.map((card) =>
                            card.id === operation.source.id
                                ? { ...card, area: operation.target.id }
                                : card
                        )
                    );
                }}
            >
                <div style={{ display: "flex", gap: "20px" }}>

                    <DroppableSpace
                        id="area1"
                        horizontal={hoz}
                        vertical={ver}
                        backcolor={"hsl(0, 100%, 85%)"}
                    >
                        {cards
                            .filter(card => card.area === "area1")
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
                        id="area2"
                        horizontal={hoz}
                        vertical={ver}
                        backcolor={"hsl(240, 100%, 85%)"}
                    >
                        {cards
                            .filter(card => card.area === "area2")
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
                        id="area3"
                        horizontal={hoz}
                        vertical={ver}
                        backcolor={"hsl(147, 100%, 85%)"}
                    >
                        {cards
                            .filter(card => card.area === "area3")
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
        </>
    )
}

export default AreasDrop;