import "./css/Style.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";


function App() {
    let nombre = "Facu Lagomarsino";

    return (
        <body className="App">
            <header>
                <NavBar />
            </header>

            <main>
                <ItemListContainer greeting="LAGO'" />
                <ItemCount count ="1" stock="10" />
                <ItemList />
              
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
