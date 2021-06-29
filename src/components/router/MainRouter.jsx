import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoList from '../feature/ToDoList';
import Counter from '../feature/Counter';
import Timer from '../feature/Timer';
import Checkbox from '../feature/Checkbox';
import APIList from '../APIList';
import APIItem from '../APIItem';
import Infos from '../Infos';
import PeopleList from '../feature/list/PeopleList';
import NewPeopleList from '../feature/list/NewPeopleList';

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
            <Route exact path='/list'>
              <PeopleList />
            </Route>
            <Route exact path='/newlist'>
              <NewPeopleList />
            </Route>
            <Route exact path='/API'>
              <APIList />
            </Route>
            <Route exact path='/API/:name' component={APIItem} />
            <Route path='/'>
              <Infos />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default MainRouter;
