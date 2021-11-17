
import logo from './TezosLogo.png';
import bkground from './Miami.jpeg';
import "./App.css";
import twitter from './twitter.png';

export const App = () => {
  return (
    <div>
   
   <img src={bkground} alt="Miami"></img>
   <img src={logo} className="image1" alt="Tezos"></img>
  
  <div className="logo">
   
  <a href="https://twitter.com/tezosmiami" target="blank" rel="noopener noreferrer"><img src={twitter} className="twitter" alt="Twitter"/>
  </a>
  <a href="https://hicetnunc.miami" target="blank" rel="noopener noreferrer">
  <svg styles="logo" viewBox="0 0 196.87 53.23" fill="#000000">
                  <path
                    d="M228.9,79.31H211.51a2.26,2.26,0,0,1-.35-.34.75.75,0,0,1-.16-.42c0-11.42,0-22.85,0-34.43H193.24v35H175.41V26.27H228.9Z"
                    transform="translate(-32.03 -26.27)"
                  />
                  <path
                    d="M67.74,43.78V26.42H85.41V79.19H67.91V62.38a4.24,4.24,0,0,0-.52-.57.77.77,0,0,0-.42-.17H50V79.08H32V26.48H49.78v17.3Z"
                    transform="translate(-32.03 -26.27)"
                  />
                  <path
                    d="M103.62,43.79V26.43h53.6c.09,5.62,0,11.41.05,17.36Z"
                    transform="translate(-32.03 -26.27)"
                  />
                  <path
                    d="M103.71,61.71h53.38V78.84c-4.05.69-38.16.91-53.38.31Z"
                    transform="translate(-32.03 -26.27)"
                  />
                </svg>
       </a>        
  </div>
 
   </div>

   );
}

export default App;

