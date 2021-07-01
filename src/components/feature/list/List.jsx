import MainLayout from '../../layout/MainLayout';
import { useContext } from 'react';
import PeopleContext from '../../context/PeopleContext';
import PeopleDetail from './PeopleDetail';
import ActivityDetail from './ActivityDetail';
import { ActivityContext } from '../../context/ActivityContext';

const peopleList = [
  { name: 'Paul', city: 'Nantes' },
  { name: 'Julien', city: 'Paris' },
  { name: 'Alice', city: 'Lyon' },
  { name: 'Thomas', city: 'Lille' },
];

const activityList = [
  { topic: 'dessin', teacher: 'Martin' },
  { topic: 'hip-hop', teacher: 'Lisa' },
  { topic: 'yoga', teacher: 'Claude' },
  { topic: 'Self-defense', teacher: 'Franck' },
];

function List() {
  const { people, setPeople } = useContext(PeopleContext);
  setPeople(peopleList);
  console.log(people);
  const { activity, setActivity } = useContext(ActivityContext);
  setActivity(activityList);
  console.log(activity);
  return (
    <div>
      <MainLayout>
        <h1>List of people</h1>
        {peopleList.map((element, index) => (
          <PeopleDetail key={index} {...element} />
        ))}
        <h1>List of activities</h1>
        {activityList.map((element, index) => (
          <ActivityDetail key={index} {...element} />
        ))}
      </MainLayout>
    </div>
  );
}

export default List;
