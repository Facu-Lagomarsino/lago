import "./css/Style.css";
import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch, Route } from "react-router-dom";

    //PAGES
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import ItemDetailContainer from "./components/ItemListContainer";
import Episodes from "./pages/Episodes";


function App() {

    return (

        <BrowserRouter >
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/characters">
                    <Characters />
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/episodes">
                    <Episodes />
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
