import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/listaSuspensa.jsx"
import Botao from "../Botao/Botao.jsx"
import "./Formulario.css"
import { useState } from "react"
const Formulario = (props) => {


        const [nome,setNome] = useState("")
        const [cargo,setCargo] = useState("")
        const [imagem,setImagem] = useState("")
        const [time,setTime] = useState("")

        const aoSalvar = (evento)=> {
            evento.preventDefault()
            console.log("Form submetido =>", nome,cargo,imagem,time);
            props.aoColaboradorCadastrado({nome,cargo,imagem,time})
            setNome("")
            setCargo("")
            setImagem("")
            setTime("")
        };
        
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}    
                    aoAlterado = {valor=> setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={props.times}
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario
