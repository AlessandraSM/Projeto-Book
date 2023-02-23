import "./App.css";
import Logo from "./componentes/Logo/index.js";
import OpcoesHeader from "./componentes/OpcoesHeader";
import Icones from "./componentes/Icones";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
       <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>
      </header>
    </div>
  );
}

export default App;
