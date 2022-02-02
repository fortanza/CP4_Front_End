import Header from 'Components/Header';
import Home from 'Containers/Home';
import Instructors from 'Containers/Instructors';
import Students from 'Containers/Students';
import YouWantToLeave from 'Containers/WeForgotYou';
import WeForgotYou from 'Containers/YouWantToLeave';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/students" component={Students} />
        <Route path="/intrustors" component={Instructors} />
        <Route path="/forgotus" component={WeForgotYou} />
        <Route path="/wanttoleave" component={YouWantToLeave} />
      </Switch>
    </>
  );
}

export default App;
