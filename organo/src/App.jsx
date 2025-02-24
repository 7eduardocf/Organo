import { useState } from 'react'
import Banner from './componentes/Banner/Banner.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import Time from './componentes/Time/Time.jsx'
import Rodape from './componentes/Rodape/Rodape.jsx'
function App() {

    const times = [
        {
            nome:'Programação',
            corPrimaria:'#57c278',
            corSecundaria:'#D9F7E9'
        },
        {
            nome:'Front-End',
            corPrimaria:'#82CFFA',
            corSecundaria:'#E8F8FF'
        },
        {
            nome:'Data Science',
            corPrimaria:'#A6D157',
            corSecundaria:'#F0F8E2'
        },
        {
            nome:'Devops',
            corPrimaria:'#E06B69',
            corSecundaria:'#FDE7E8'
        },
        {
            nome:'UX e Design',
            corPrimaria:'#DB6EBF',
            corSecundaria:'#FAE9F5'
        },
        {
            nome:'Mobile',
            corPrimaria:'#FFBA05',
            corSecundaria:'#FFF5D9'
        },
        {
            nome:'Inovação e Gestão',
            corPrimaria:'#FF8A29',
            corSecundaria:'#FFEEDF'
        },
    ]

    const [colaboradores,setColaborador] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador)=>{
        setColaborador([...colaboradores, colaborador])
    }
    return (
        <div className='App'>
            <Banner></Banner>
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
            {times.map(time =>{
                return <Time
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
            })}
            <Rodape/>
        </div>

    )
}

export default App