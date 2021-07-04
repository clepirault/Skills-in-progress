import MainLayout from '../layout/MainLayout';
import './Feature.css';
import Code from '../commons/Code';
import { TextContent } from '../commons/TextContent';

function Context() {
  return (
    <MainLayout>
      <div>
        <p className="contextDescription">
          Avez-vous remarqué le status dans l'en-tête de mon site ? <br />
          Ainsi que le bouton dans le bas de page ? <br />
          Amusez-vous à vous connecter et vous deconnecter tout en navigant dans le site. <br />
          J'ai ici mis en place React Context pour cette fonctionnalité.
        </p>
      </div>
      <Code link={TextContent.link3}/>
    </MainLayout>
  );
}

export default Context;
