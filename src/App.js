// import logo from './logo.svg'; //no se de donde viene el error

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './css/Style.css';
import './App.css';


function App() {

    let nombre = "Facu Lagomarsino";

    return (
        
    <body className="App">
        <header>

        <NavBar />
    
        </header>

        <main>
            <div id="main" class="container">
                <h3>Hola!</h3>
                <p>Lago' en React!</p> 
            </div> 
        </main>
        
     
        <footer> 
        <Footer nombre={nombre} />
            <a 
            className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Sumate!
            </a>
        </footer>
    </body>

    );
}

export default App;


