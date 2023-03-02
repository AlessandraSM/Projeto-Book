import { livrosNovos } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import  CardRecomenda from "../CardRecomenda"
import livroImg from "../../img/livro2.png"

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  overflow: scroll;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo 
        cor="#EB9B00" 
        tamanhoFonte="36px" 
       >
            Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livrosNovos.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda 
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google."
        imagem={livroImg}
      />
      <CardRecomenda 
        titulo="Talvez você se interesse por"
        subtitulo="Estratégias de UI e UX"
        descricao="Construindo uma aplicação desde a interface para usuários."
        imagem={livroImg}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
