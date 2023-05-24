import './App.css';
import FishContainer from './containers/FishContainer';
import acLogo from './assets/acLogo.png'
import SeaCreatureContainer from './containers/SeaCreatureContainer';
import BugsContainer from './containers/BugContainer';
import FossilContainer from './containers/FossilContainer';

function App() {
  return (
    <>
      <header>
        <img src={acLogo} alt="ac logo"/>
          <h1>Animal Crossing Encyclopedia</h1>
          <nav className='navbar'>
              <a href="/FishContainer">Fish</a>
              <a href="/SeaCreaturesContainer">Sea Creatures</a>
              <a href="#">Bugs</a>
              <a href="#">Fossils</a>
          </nav>
      </header>


      <main>
        <section className="hero">
        </section>

        <section className='fishes'>
          <h2><u>List of Fish</u></h2>
          <FishContainer />
        </section>

        <section className='sea_creatures'>
          <h2><u>List of Sea Creatures</u></h2>
          <SeaCreatureContainer />
        </section>

        <section className='bugs'>
          <h2><u>List of Bugs</u></h2>
          <BugsContainer />
        </section>

        <section className='fossils'>
          <h2><u>List of Fossils</u></h2>
          <FossilContainer />
        </section>


      </main>


      <footer>
        <nav>
              <h2>Useful Links</h2>
              <a href="#">Fish</a>
              <a href="#">Sea Creatures</a>
              <a href="#">Bugs</a>
          </nav>
      </footer>

    </>

  );
}

export default App;
