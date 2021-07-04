import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoList from '../feature/ToDoList';
import Counter from '../feature/Counter';
import Timer from '../feature/timer/Timer';
import Checkbox from '../feature/checkbox/Checkbox';
import APIList from '../APIList';
import APIItem from '../APIItem';
import Home from '../Home';
import Context from '../feature/Context';

function MainRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/todolist'>
            <ToDoList />
          </Route>
          <Route path='/counter'>
            <Counter />
          </Route>
          <Route path='/timer'>
            <Timer />
          </Route>
          <Route path='/checkbox'>
            <Checkbox />
          </Route>
          <Route path='/context'>
            <Context />
          </Route>
          <Route exact path='/API'>
            <APIList />
          </Route>
          <Route exact path='/API/:name' component={APIItem} />
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainRouter;
