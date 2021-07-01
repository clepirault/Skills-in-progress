import MainLayout from '../../layout/MainLayout';
import { useContext } from 'react';
import { ActivityContext } from '../../context/ActivityContext';
import ActivityDetail from './ActivityDetail';

function ActivityList() {
  const { activity } = useContext(ActivityContext);
  return (
    <MainLayout>
    <h1>List of activities displayed from context</h1>
    <p>To display the list, we need to visit the "List" page at first, and then, go back here !</p>
    {activity.map((element, index)=>(
          <ActivityDetail key={index} {...element}/>
        ))}
    </MainLayout>
  );
}

export default ActivityList;