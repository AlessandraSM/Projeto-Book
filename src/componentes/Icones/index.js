import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
`
const IconesItem = styled.ul`
    display: flex;
`
const icones = [perfil, sacola]

function Icones(){
    return(
        <IconesItem IconesItem>{ icones.map((icone) =>(
            <Icone><img src={icone}></img></Icone>
          ))}</IconesItem>
    )
}

export default Icones