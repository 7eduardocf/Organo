import "./Rodape.css"
const Rodape = () =>{
    return (
        <footer className="container__rodape">
            <ul className="rodape__lista">
                <li className="rodape__lista-img">
                    <img src="../imagens/fb.png" alt="Facebook"/>
                </li>
                <li className="rodape__lista-img">
                    <img src="../imagens/tw.png" alt="Twitter"/>
                </li>
                <li className="rodape__lista-img">
                    <img src="../imagens/ig.png" alt="Instagram"/>
                </li>
            </ul>
            <div>
                <img src="../imagens/logo.png" alt="Logo"/>
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape