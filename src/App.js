import './App.css';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <Menu></Menu>
      </header>
      <body>
        <div>
          <h1>SnakeBet</h1>
            <artic>
              O famoso "jogo da cobrinha", que com certeza você teve
               um dos seus primeiros celulares, porém agora você poderá ganhar
                dinheiro desmontrando as suas habilidades neste jogo icônico.
            </artic>
            <input type = "button" value="JOGAR AGORA"></input>
          </div>
          <div>
            <artic>
            Para jogar o jogo da cobrinha é muito simples, basta não encostar nas outras cobras do mapa e 
            não encostar na lateral do mapa, as bolinhas coloridas podem obter lucros com base na sua aposta, 
            mas tambem pode levar parte da sua aposta! 
            (Você terá que descobrir qual bolinha lhe dará muito lucro e qual irá fazer você perder...)
            </artic>
            <input type = "button" value="GANHE 2 RODADAS GRATÍS"></input>
          </div>
          <div>
            <artic>
            Jogue e ganhe bônus e presentes misteriosos, são diversos premios incluindo rodadas grátis, bônus em 
            dinheiro real e muito mais. 
            Quanto mais você jogar, maiores suas chances de ganhar, aproveite já!
            </artic>
            <input type = "button" value="JOGAR AGORA"></input>
          </div>
      </body>
      <footer>
          <h2>
            SneakBet
          </h2>
            Todos os direitos reservados a Jogo da Cobrinha
            Leia o regulamento do jogo e termos de uso.
            Produto registrado, plágio proibido.
      </footer>
    </div>
  );
}

export default App;
