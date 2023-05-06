import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Waitlist from './components/waitlist/waitlist'
import Form from './components/form/form'
import Success from './components/success/success'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={Waitlist} />
          <Route path="/form" exact component={Form} />
          <Route path="/success" exact component={Success} />
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
