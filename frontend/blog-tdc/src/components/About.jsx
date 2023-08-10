import picture from '../images/pic-buenos-aires.jpeg';
import instagram from '../images/icons8-instagram-100-bubbles.png';
import spotify from '../images/icons8-spotify-logo-bubbles.png';
import pinterest from '../images/icons8-bubbles-pinterest-100.png';
import '../styles/About.css';
import notebooks from '../images/pilha-de-cadernos.jpeg';

function About() {
    return (
      <div className='about-container'>
        <div className='photo-container'>          
          <h3>Sobre</h3>
          <img 
            src={ notebooks }
            alt='Foto de uma pilha de cadernos feitos à mão'
          />
          <p>
            Olá, boas vindas ao blog da papelaria artesanal Ateliê Teoria das Cores!
            Aqui você vai encontrar dicas e reflexões sobre organização pessoal,
            vida criativa, e conhecer um pouco mais sobre os bastidores de criação das coleções.
          </p>          
          <h3>Saiba mais</h3>
          <img 
            src={ picture }
            alt='Foto de Maria Luíza, autora do blog, uma mulher parda, de cabelos e olhos castanhos escuros'
          />
          <p>
            O Ateliê Teoria das Cores é um projeto pessoal onde eu, Malu, faço a união entre 
            duas de minhas paixões - a papelaria e as artes manuais! Meu objetivo é criar 
            peças fora do comum  combinando  técnicas diversas como a encadernação manual,
            ilustração, bordado, entre outras.
          </p> 
        </div>
        <div className='presentation'>

        </div>
        <div className='external-links'>
          <h3>Conheça a loja online:</h3>
          <a href='https://www.lojinhatdc.com.br/'>
            <h4>Lojinha TDC</h4>
          </a>
          <h3>Encontre-me em outras redes:</h3>
          <a href='https://www.instagram.com/tdc.ateliedearte/'>
            <img 
              src={ instagram }
              alt='instagra-icon-link'
            />
          </a>
          <a href='https://open.spotify.com/playlist/6GLEDGb9xmbndVz6vKKTJc?si=7522a5d802574da7'>
            <img 
              src={ spotify }
              alt='spotfy-icon-link'
            />
          </a>
          <a href='https://br.pinterest.com/malusuhadolnik/'>
            <img 
              src={ pinterest }
              alt='pinterest-icon-link'
            />
          </a>
        </div>
      </div>
    )
}

export default About