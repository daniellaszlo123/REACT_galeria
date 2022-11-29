import './App.css';
import Kep from './galeria/Kep';

const kepek = [
  {
    id:1,
    nev:"kep",
    eleresiUt:"kepek/kep1.png"
  },
  {
    id:2,
    nev:"kep",
    eleresiUt:"kepek/kep1.png"
  },
  {
    id:3,
    nev:"kep",
    eleresiUt:"kepek/kep1.png"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <article className='kepek'>
        {
          kepek.map((kep)=>{
            return(<Kep kep={kep} key={kep.id}/>)
          })

        }
      </article>
      <footer className='lablec'>
        én
      </footer>
    </div>
  );
}

export default App;
