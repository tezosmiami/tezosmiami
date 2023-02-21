
import logo from './tezosmiami3.png';
import "./App.css";
import prestamo from './presta.svg'
import twitter from './twitter.svg';

import fruitensalda from './fruitensalada.jpg';

const sites = [
    { icon: '❶', name: 'singulare', link: 'https://singulare.xyz' },
    { icon: '■ ', name: 'pixils', link: 'https://pixils.xyz' }, 
    { icon: '☯ ', name: 'gletchard', link: 'https://gletchard.xyz' },
    { icon: <img src={prestamo} style={{width: '27px', verticalAlign: 'sub', objectFit: 'cover', height:'27px'}}/>, name: 'prestamo', link: 'https://prestamo.art'},
    { icon: '📷 ', name: 'fotographia', link:'https://fotographia.xyz' }
   
]

export const App = () => {


  return (
    <div>
      <div>
        <a href="https://twitter.com/tezosmiami" target="blank" rel="noopener noreferrer">
        <img src={logo} className="image1" alt="Tezos"></img></a>
      </div>
  
      <div style={{marginTop: '22px'}}>
        {sites.map((i) => {
            return <div className='sites'style={{justifyItems:'center'}}key={i.name}>
                      <a href={i.link} target="blank" rel="noopener noreferrer">{[i.icon,' ',i.name, ' ',i.icon]}</a>
                  </div>
          }
        )}
      </div>
      <div />

      <div className="logo">
        {/* <a href="https://twitter.com/tezosmiami" target="blank" rel="noopener noreferrer">
          <img src={twitter} className="twitter" alt="Twitter"/>
        </a>  */}
        
        <a href="https://hicetnunc.live/tezosmiami" target="blank" rel="noopener noreferrer">
          <svg styles="logo" viewBox="0 0 196.87 53.23" fill="#72e072">
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
        <a href="https://fruitensalada.xyz" target="blank" rel="noopener noreferrer">    
          <img className="fruta" src={fruitensalda} alt="fruitensalda"/>
        </a>
        <a href="https://github.com/tezosmiami" target="blank" rel="noopener noreferrer">
         <svg height="24" viewBox="0 0 16 16" width="24">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        </a> 
        <a href="https://twitter.com/tezosmiami" target="blank" rel="noopener noreferrer">    
        <img className="twitter" src={twitter} alt="twitter"/>
        </a>
      </div>
      
    </div>
   );
}

export default App;

