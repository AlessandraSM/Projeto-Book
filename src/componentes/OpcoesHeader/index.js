import './styled.css'

const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return(
        <ul className="opcoes">
        { textOpcoes.map( (texto) =>(
         <li className='opcao'><p>{texto}</p></li>
        ))}
       </ul>
    )
}
export default OpcoesHeader