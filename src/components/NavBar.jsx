import MiLogo from '../img/lt.png';
import MenuHam from '../img/menuH.png';


let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide"); 


function NavBar() { 

    const handleClick=()=>{
    window.scrollTo({ top: "500", behavior: "smooth" });

    }

    return (

        <>
      
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="index.html"><img src={MiLogo} className="App-logo" alt="logo" /></a>
            <h1 className="title" onClick={handleClick}>Lago'</h1>
            <button id="menu" className="menu"><img src={MenuHam} alt="menu" /></button>
        </nav>   

        <div id="menuNav" className="menuNav">         
            <ul>
                <li><a href="index.html" className="option">Home</a></li>
                <li><a href="index.html" className="option">Info</a></li>
                <li><a href="index.html" className="option">Horarios</a></li>
                <li><a href="index.html" className="option">Contacto</a></li>
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

