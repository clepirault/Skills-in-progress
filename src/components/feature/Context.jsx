import './Feature.css';
import Code from '../commons/Code';
import Table from '../commons/Table';
import { TextContent } from '../../TextContent';

function Context() {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Context</h2>
        <Table>
          <>{TextContent.notion8}</>
          <>{""}</>
        </Table>
        <p className='contextDescription'>
          Avez-vous remarqué le status dans l'en-tête ? <br />
          Ainsi que le bouton dans le bas de page ? <br />
          Vous pouvez vous connecter et vous deconnecter tout en navigant dans
          l'application. <br /> <br />
          L'API d'Harry Potter a aussi été déployée grace au Context.
        </p>
      </div>
      <Code link={TextContent.link3} />
    </div>
  );
}

export default Context;
