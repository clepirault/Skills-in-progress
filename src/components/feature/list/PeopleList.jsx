import MainLayout from '../../layout/MainLayout';
import { useContext } from 'react';
import PeopleContext from '../../context/PeopleContext';
import PeopleDetail from './PeopleDetail';

const people = [
  { name: 'Paul', city: 'Nantes' },
  { name: 'Julien', city: 'Paris' },
  { name: 'Alice', city: 'Lyon' },
  { name: 'Thomas', city: 'Lille' },
];

function List() {
  const { peopleList, setPeopleList } = useContext(PeopleContext);
  setPeopleList(people);
  console.log(peopleList);
  return (
    <div>
      <MainLayout>
        <h1>List of people</h1>
        {people.map((element, index)=>(
          <PeopleDetail key={index} {...element}/>
        ))}
      </MainLayout>
    </div>
  );
}

export default List;
