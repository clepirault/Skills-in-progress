import MainRouter from './components/router/MainRouter';
import StatusProvider from './components/context/StatusContext';
import APIProvider from './components/context/APIContext';

function App() {
  return (
    <div>
      <StatusProvider>
        <APIProvider>
          <MainRouter />
        </APIProvider>
      </StatusProvider>
    </div>
  );
}

export default App;
