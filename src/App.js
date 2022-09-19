import './App.css';
import { Calculadora } from './components/Calculadora';
// import { Estudante } from './components/Estudante';
import { OlaMundo } from './components/OlaMundo';
//import { Eleven, Vecna, Will } from './components/StrangerThings';
import { Imc } from './components/Imc';
import Grupo from './components/Vingadores/Grupo';
import Heroi from './components/Vingadores/Heroi';
import Disciplina from './components/universidade/Disciplina';
import { Estudante } from './components/universidade/Estudante';
import  Pai  from './components/paifilho/Pai';
import Contador from './components/status/Contador';
import Votacidade from './components/status/Votacidade';


function App() {
  return (
    <div className="App">
      <OlaMundo />

     <Estudante
        nome="Mateus Allen"
        curso="Redes de Computadores"
        universidade="Universidade Federal do Ceará"
        cidade="Senador Pompeu"
      />
      
      {/*<Vecna />

      <Will />

      <Eleven />
    */}
     <Calculadora op= "fdg" x = {45} y = {67}  />

     <Imc peso={70} altura={1.68} />

     <Grupo titulo='Vingadores'>
        <Heroi nome='Capitão América' />
        <Heroi nome='Hulk' />
        <Heroi nome='Viúva Negra' />
        <Heroi nome='Homem de Ferro' />
        <h5>Fim dos nomes!</h5>
      </Grupo>

      <Disciplina disciplina="Fundamentos de Bancos de Dados">
      <Estudante  cidade="Quixadá-CE" curso="RC" universidade="UFC" nome="Mateus Allen"/>
      </Disciplina>

      <Pai />

      <Contador />

      <Votacidade />

    </div>
  );
}

export default App;