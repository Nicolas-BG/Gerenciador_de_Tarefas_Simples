import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Caixa, H1padronizado, InputTitulo, InputDescricao, SelectTarefa } from './AdicionarStyle'
import { Botao, Centro, CentroVer } from '../../styles/GeneralUseComponents';
import { useState } from 'react';

function Adicionar_Pagina() {


    const [dados, setDados] = useState({
        nome: '',
        texto: '',
        area: 'NaoIniciadas'
    });

    const mudanca = (e) => {
        const { name, value } = e.target;
        setDados(prevDados => ({
            ...prevDados,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!dados.nome || !dados.texto) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }
        console.log('Dados a serem enviados:', dados);
        console.log('Dados json a serem enviados:', JSON.stringify(dados));
        var result = window.confirm(`Deseja adicionar tarefa - ${dados.nome} - no backend?`);
        if (!result) {
            return;
        }

        //

        const { nome, texto, area } = { nome: dados.nome, texto: dados.texto, area: dados.area };
        fetch(`http://localhost:3001/tarefasPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, texto, area })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Tarefa adicionada:', data);
                alert(`Tarefa - ${dados.nome} - adicionada com sucesso!`);

                setDados({
                    nome: '',
                    texto: '',
                    area: 'NaoIniciadas'
                });
            })
            .catch(error => {
                console.error('Erro ao adicionar tarefa:', error);
                alert("Erro ao adicionar tarefa. Por favor, tente novamente.");
            });

        //

    }

    return (
        <div>
            <Header pagina={3}></Header>
            <CentroVer>
                <H1padronizado style={{ marginTop: "10px", marginBottom: "10px" }}>Adicionar Tarefas</H1padronizado>

                <Caixa style={{ marginTop: "10px", marginBottom: "20px" }} onSubmit={handleSubmit}>
                    
                    <Centro style={{ marginTop: "20px" }}>
                        <h2>Titulo da Tarefa:</h2>
                        <InputTitulo type="text" placeholder='Digite o titulo da tarefa'
                            name="nome"
                            value={dados.nome}
                            onChange={mudanca}
                        ></InputTitulo>
                    </Centro>

                    <Centro style={{ marginTop: "-10px" }}>
                        <h2>Descrição da Tarefa:</h2>
                    </Centro>
                    
                    <Centro>
                        <InputDescricao type="text" placeholder='Digite a descrição da tarefa'
                            name="texto"
                            value={dados.texto}
                            onChange={mudanca}
                        ></InputDescricao>
                    </Centro>
                    
                    <Centro style={{ marginTop: "20px" }}>
                        <h2>Status da Tarefa:</h2>
                        <SelectTarefa
                            name="area"
                            value={dados.area}
                            onChange={mudanca}
                        >
                            <option value="NaoIniciadas">Não Iniciadas</option>
                            <option value="EmDesenvolvimento">Em Desenvolvimento</option>
                            <option value="Concluidas">Concluídas</option>
                        </SelectTarefa>
                    </Centro>


                    <Botao type="submit" style={{ left: "525px" }}>Adicionar</Botao>

                </Caixa>


            </CentroVer>
            <Footer></Footer>
        </div>
    )
}

export default Adicionar_Pagina; 