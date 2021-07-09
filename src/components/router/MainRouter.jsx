import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoList from '../feature/ToDoList';
import Counter from '../feature/Counter';
import Timer from '../feature/timer/Timer';
import Checkbox from '../feature/checkbox/Checkbox';
import APIList from '../feature/API/APIList';
import APIItem from '../feature/API/APIItem';
import Home from '../feature/home/Home';
import Context from '../feature/Context';
import MainLayout from '../layout/MainLayout';

function MainRouter() {
  return (
      <Router>
        <MainLayout>
        <Switch>
          <Route path='/todolist' component={ToDoList} />
          <Route path='/counter' component={Counter} />
          <Route path='/timer' component={Timer} />
          <Route path='/checkbox' component={Checkbox} />
          <Route path='/context' component={Context} />
          <Route exact path='/API' component={APIList} />
          <Route exact path='/API/:name' component={APIItem} />
          <Route path='/' component={Home} />
        </Switch>
        </MainLayout>
      </Router>
  );
}

export default MainRouter;
