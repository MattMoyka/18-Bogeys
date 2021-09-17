import './App.css';
import { Route } from 'react-router-dom'
import Newround from './components/Newround'
import Gamedata from './components/Gamedata'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Scorecard from './components/Scorecard'
import Scorecarddisplay from './components/Scorecarddisplay'
import Scorecardedit from './components/Scorecardedit'


function App() {

  return (
    <div className="App text-4xl h-1vh">
      <Navbar />

      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route exact path='/newround'>
        <Newround />
      </Route>

      <Route exact path='/newround/scorecard'>
        <Scorecard />
      </Route>

      <Route exact path='/gamefeed'>
        <Gamedata />
      </Route>

      <Route exact path='/gamefeed/:id'>
        <Scorecarddisplay />
      </Route>

      <Route exact path='/gamefeed/:id/edit'>
        <Scorecardedit />
      </Route>

    </div>
  );
}

export default App;
