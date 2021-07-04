import MainRouter from './components/router/MainRouter';
import StatusProvider from './components/context/StatusContext';

function App() {
  return (
    <div>
      <StatusProvider>
        <MainRouter />
      </StatusProvider>
    </div>
  );
}

export default App;
