import './styles/App.css';
import LandingPage from './components/LandingPage.js';
import Game from './components/Game.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <div className="App">
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossorigin="anonymous"
        />
        <Route path="/" component={LandingPage} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
  );
}

export default App;

// References: 
// Passing data in React: https://medium.com/@learncodefromjohn/passing-data-from-parent-to-child-components-and-vice-versa-with-react-406bb4521512?source=follow_footer-----fb4f9b5358da----0----------------------------
