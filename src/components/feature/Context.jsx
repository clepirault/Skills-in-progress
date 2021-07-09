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
          <>Session d'utilisateur</>
        </Table>
        <p className='contextDescription'>
          Avez-vous remarqué le status dans l'en-tête ? <br />
          Ainsi que le bouton dans le bas de page ? <br />
          Vous pouvez vous connecter et vous deconnecter tout en navigant dans
          l'application.
        </p>
      </div>
      <Code link={TextContent.link3} />
    </div>
  );
}

export default Context;
