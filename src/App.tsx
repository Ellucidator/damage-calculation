import './app.css'
function App() {

  return (
    <div className="app">
      <div className='container'>
        <h1>Guerreiro</h1>
        <img src="../public/Guerreiro.png" alt="" className='img-character' />
        <div className='atq'>40</div>
      </div>
      <div className='container damage'>
        <h1>Dano de Ataque</h1>
        <div className='img-damage'></div>
        <span className='atq damage-valor'>
        100
        </span>
      </div>
      <div className='container'>
        <h1>Paladino</h1>
        <img src="../public/Paladin.png" alt="" className='img-character' />
        <div className='def'>
          <span className='def-item shield'>40</span>
          <span className='def-item life'>40</span>
        </div>
      </div>
    </div>
  )
}

export default App
