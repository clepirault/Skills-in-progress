import { useContext } from "react";
import { Link } from "react-router-dom";
import { TextContent } from "../../../TextContent";
import Code from "../../commons/Code";
import { APIContext } from '../../context/APIContext';
import './API.css';

function APIItem(props) {
  const params = props.match.params;
  const { character } = useContext(APIContext);
  const enterAge = (year) => {
    return 1992 - year;
  }
  const exitAge = (year) => {
    return 1998 - year;
  }
  return (
    <div className="apiItem">
        {character
          .filter((element) => element.name === params.name) 
          .map((element) => ( 
            <div className='characterDetail'>
              <h3>{element.name}</h3>
              <span> {element.yearOfBirth === "" ? "" : `Aged ${enterAge(element.yearOfBirth)} at the beginning and ${exitAge(element.yearOfBirth)} at the end of the books writting by JK Rowling.`} </span>
              <span>{element.gender === "female" ? "She" : "He"} is a {element.hogwartsStudent ? "student" : "teacher"} of Hogwarts, and {element.gender === "female" ? "She" : "He"} belong to <strong>{element.house}</strong> house.</span>
              <span>{element.gender === "female" ? "She" : "He"} is played by <strong>{element.actor}</strong>.</span>
              <img src={element.image} alt={element.name} />
              <Link to='/API' className="detailLink">Retour</Link>
            </div>
        ))}
        <Code link={TextContent.link4} />
    </div>
  );
}

export default APIItem;
