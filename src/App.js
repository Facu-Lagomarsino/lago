import "./css/Style.css";
import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch, Route } from "react-router-dom";

    //PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
// import ItemListContainer from "./components/ItemListContainer";


function App() {

    return (

        <BrowserRouter >
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/categories">
                    <Categories />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
