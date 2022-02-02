import Header from 'Components/Header';
import Home from 'Containers/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
