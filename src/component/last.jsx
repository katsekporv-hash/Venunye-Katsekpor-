import './styles/last.css';
import whatimg from '../assets/whatsapp.svg';
import ximg from '../assets/x-twitter.svg';
import faceimg from '../assets/facebook.svg';
import linkimg from '../assets/linkedin-in.svg';
import snapimg from '../assets/github.svg';

const Last = () => {
  return (
    <footer>
      <div className="list">
        <a href="https://wa.me/233595524660" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <img src={whatimg} width={20} height={20} alt="WhatsApp" />
        </a>

        <a href="https://www.facebook.com/slyowusuviron" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src={faceimg} width={20} height={20} alt="Facebook" />
        </a>

        <a href="https://x.com/Byteband1t_01" target="_blank" rel="noreferrer" aria-label="X">
          <img src={ximg} width={20} height={20} alt="X" />
        </a>

        <a
          href="https://www.linkedin.com/in/elvin-owusu-703abb363?"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkimg} width={20} height={20} alt="LinkedIn" />
        </a>

        <a href="https://www.github.com/V1RON6/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <img src={snapimg} width={20} height={20} alt="GitHub" />
        </a>
      </div>
      <p id="laststraw">©{new Date().getFullYear()} Elvin Sly Owusu. All rights reserved.</p>
    </footer>
  );
};

export default Last;