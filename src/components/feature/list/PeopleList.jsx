import MainLayout from '../../layout/MainLayout';
import { useContext } from 'react';
import PeopleContext from '../../context/PeopleContext';
import PeopleDetail from './PeopleDetail';

function PeopleList() {
  const { people } = useContext(PeopleContext);
  return (
    <MainLayout>
    <h1>List of people displayed from context</h1>
    <p>To display the list, we need to visit the "List" page at first, and then, go back here !</p>
    {people.map((element, index)=>(
          <PeopleDetail key={index} {...element}/>
        ))}
    </MainLayout>
  );
}

export default PeopleList;
