import './App.css';
import { Route } from 'react-router-dom'
import Newround from './components/Newround'
import Gamedata from './components/Gamedata'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Scorecard from './components/Scorecard'
import Scorecarddisplay from './components/Scorecarddisplay'



function App() {

  return (

    <div className="App">


      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route exact path='/newround'>
        <Navbar />
        <Newround />
      </Route>

      <Route exact path='/newround/:id/scorecard'>
        <Navbar />
        <Scorecard />
      </Route>

      <Route exact path='/gamefeed'>
        <Navbar />
        <Gamedata />
      </Route>

      <Route exact path='/gamefeed/:id'>
        <Navbar />
        <Scorecarddisplay />
      </Route>

      <Route exact path='/gamefeed/:id/edit'>
        <Navbar />
        <Scorecard />
      </Route>


    </div>

  );
}

export default App;
