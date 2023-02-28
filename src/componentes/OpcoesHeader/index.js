import styled from "styled-components";

const OpcoesContainer = styled.ul`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
`;

const Opcoes = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <OpcoesContainer>
      {textOpcoes.map((texto) => (
        <Opcoes>
          <p>{texto}</p>
        </Opcoes>
      ))}
    </OpcoesContainer>
  );
}
export default OpcoesHeader;
