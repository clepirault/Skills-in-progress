import MainLayout from '../../layout/MainLayout';
import { useContext } from 'react';
import PeopleContext from '../../context/PeopleContext';
import PeopleDetail from './PeopleDetail';

function NewPeopleList() {
  const { peopleList } = useContext(PeopleContext);
  return (
    <MainLayout>
    <h1>New list of people</h1>
    {peopleList.map((element, index)=>(
          <PeopleDetail key={index} {...element}/>
        ))}
    </MainLayout>
  );
}

export default NewPeopleList;
