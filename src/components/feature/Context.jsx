import './Feature.css';
import Code from '../commons/Code';
import { TextContent } from '../../TextContent';

function Context() {
  return (
    <>
      <div>
        <p className='contextDescription'>
          Avez-vous remarqué le status dans l'en-tête de mon site ? <br />
          Ainsi que le bouton dans le bas de page ? <br />
          Amusez-vous à vous connecter et vous deconnecter tout en navigant dans
          le site. <br />
          J'ai ici mis en place React Context pour cette fonctionnalité.
        </p>
      </div>
      <Code link={TextContent.link3} />
    </>
  );
}

export default Context;
