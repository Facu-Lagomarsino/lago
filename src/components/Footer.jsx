import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Youtube from '../img/youtube.png';



function Footer(props) {

    
    return(

        <>

        <footer className="miFooter">
		<p>Seguinos en:</p>
		    <ul className="misRedes">
			    <li><a href="https://www.facebook.com/"><img src={Facebook} alt="" /></a></li>
			    <li><a href="https://www.instagram.com/"><img src={Instagram} alt="" /></a></li>
			    <li><a href="https://www.youtube.com/"><img src={Youtube} alt="" /></a></li>
		    </ul>
            <span>Creador del sitio: {props.nombre}</span>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Sumate!
            </a>
	    </footer>

        </>

    );
}

export default Footer;