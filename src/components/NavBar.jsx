import { Link } from 'react-router-dom';

    //IMAGES
import MiLogo from '../img/lt.png';
import MenuHam from '../img/menuH.png';
import CartWidget from './CartWidget';



let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide"); 

function NavBar() { 

    const handleClick= () => {
    window.scrollTo({ top: "300", behavior: "smooth" });

    }

    return (

        <>   
      
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="index.html"><img src={MiLogo} className="App-logo" alt="logo" /></a>
            <h1 className="title" onClick={handleClick}>Lago'</h1>
            <button id="menu" className="menu"><img src={MenuHam} alt="menu" /></button>
            <CartWidget />
        </nav>   

        <div id="menuNav" className="menuNav">         
            <ul>
                <li className="option">
                    <Link to="/">Home</Link>
                </li>
                <li className="option">
                    <Link to="/">Products</Link>
                </li>
                <li className="option">
                    <Link to="/">Products Detail</Link>
                </li>
                <li className="option">
                    <Link to="/">Categories</Link>
                </li>
            </ul>
            <span className="slide"></span>
        </div>

        {

            options.forEach((ele,index)=>{
                ele.addEventListener("mouseover",()=>{ 
                slide.style.left = 100/options.length*index +
                "%"});     
            })  

        }

        </>  
    );
}

export default NavBar;

