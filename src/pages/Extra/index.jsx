import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Caixa, Caixinha_img } from './ExtraStyle'
import { Botao, Centro, CentroVer } from '../../styles/GeneralUseComponents';
import React, { useState } from 'react';

function Home({ variavelzinha }) {
    const [count, setCount] = useState(0);
    const [imagemAparece, setImagemAparece] = useState(false);

    return (
        <div>
            <Header pagina={4}></Header>
            <CentroVer style={{ marginTop: '20px' }}>
                <h3>Honestamente eu não sei o que colocar aqui, as partes mais interessantes estão nas outras abas, então aqui tem um uso básico de UseState</h3>

                <Caixa>
                    <Centro style={{ fontSize: '20px' }}>
                        Clique no <Botao onClick={() => setCount(count + 1)}> Botão</Botao> para aumentar o contador: {String(count).padStart(2, '0')}
                    </Centro>
                </Caixa>

                <Caixa>
                    
                    <Centro style={{ fontSize: '20px', marginBottom: '20px' }}>
                        Clique no <Botao onClick={() => setImagemAparece(!imagemAparece)}> Botão</Botao> para fazer aparecer a imagem
                    </Centro>
                    <Centro style={{ height: '340px' }}>
                        {imagemAparece ? (

                            <Caixinha_img>
                                <img src="https://i.pinimg.com/474x/ec/91/38/ec913835b6966dac933696474193d116.jpg" alt="Imagem" style={{ width: '300px', height: '300px', margin: '0px' }} />
                            </Caixinha_img>

                        ) : (

                            <Caixinha_img />

                        )}

                    </Centro>
                </Caixa>


            </CentroVer>

            <Footer></Footer>
        </div>
    )
}

export default Home;

//{imagemAparece ( ... ) : 