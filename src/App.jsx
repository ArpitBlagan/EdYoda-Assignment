import './App.css'
import Content from './Content';
import logo from './images/logo.svg';
import chevron from './images/chevron.svg';
import vector from './images/vector.svg';
function App() {
  return (
    <div>
      <div className='header'>
      <div className='left'>
        <div style={{marginLeft:'64px'}}>
          <img src={logo}/>
        </div>
        <div className='center'style={{marginLeft:'64px',marginRight:'64px'}}>Courses <img src={chevron}/></div>
        <div className='center'>Programs <img src={chevron}/></div>
      </div>
      <div className='right center'>
        <div style={{marginLeft:'64px'}}>
          <img src={vector}/>
        </div>
        <div style={{marginLeft:'64px',marginRight:'64px',height:'19px',width:'46px'}}>Log in</div>
        <button className='btn ' style={{marginRight:'64px',fontWeight:'30px',color:'white'}}>Join Now</button>
      </div>
      </div>
      <Content/>
    </div>
  )
}

export default App
