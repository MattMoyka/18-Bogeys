import './App.css';
import { Route } from 'react-router-dom'
import Newround from './components/Newround'
import Gamedata from './components/Gamedata'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App text-4xl">
      <Navbar />

      <Route exact path='/'>
        <Homepage />
      </Route>

      <Route path='/newround'>
        <Newround />
      </Route>

      <Route path='/newround/scorecard'>
        <Scorecard />
      </Route>

      <Route path='/gamefeed'>
        <Gamedata />
      </Route>

      <Route path='/gamefeed/:id'>
        <Scorecarddisplay />
      </Route>

      <Route path='/gamefeed/:id/edit'>
        <Scorecardedit />
      </Route>

    </div>
  );
}

export default App;
