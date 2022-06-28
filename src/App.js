import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
            <div className="menu">
              <div className="logo">
                <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/6016197-letra-l-logo-design-modelo-criativo-moderno-moderno-l-tipografia-e-colorido-gradiente-vetor.jpg"></img>
              </div>
              <div className="item-menu">
                <a href="#">Login</a>
                <a href="#"> Sing up</a>

              </div>
            </div>
        </div>  
        <div className="form">

          <form>
          <h2> Entre em contato!</h2>
            <div className="items-form">
              <input placeholder ="Nome completo" type="text"></input>
              <input placeholder ="E-mail" type="text"></input>
              <input placeholder="Celular" type="text"></input>
              <input type="text"></input>
              <input value="Enviar" type="submit"></input>
            </div>
          </form>
        </div>


      </div>
      
    </div>
  );
}

export default App;
