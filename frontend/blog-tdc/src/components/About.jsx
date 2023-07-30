import picture from '../images/malu-avatar.jpeg'
import instagram from '../images/icons8-bubbles-instagram-100.png'
import spotify from '../images/icons8-bubbles-spotify-100.png'
import pinterest from '../images/icons8-bubbles-pinterest-100.png'
import '../styles/About.css'

function About() {
    return (
      <div className='about-container'>
        <div className='photo-container'>
          <img 
            src={ picture }
            alt='Foto de Maria Luíza, autora do blog, uma mulher parda, de cabelos e olhos castanhos escuros'
          />
        </div>
        <div className='presentation'>
          <h3>Sobre</h3>
          <p>Texto de apresentação aqui</p> 
        </div>
        <div className='external-links'>
          <h3>Conheça a loja online:</h3>
          <a href='https://www.lojinhatdc.com.br/'>
            <p>Lojinha TDC</p>
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