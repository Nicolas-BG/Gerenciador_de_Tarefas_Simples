import { Title } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


function Home({variavelzinha}){

    return (
        <div>
            <Header pagina={1}></Header>
            <Title> Home {variavelzinha} </Title>
            <Footer></Footer>
        </div>
    )
}

export default Home; 