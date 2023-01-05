import { useContext } from 'react';
import Loading from './components/Loading';
import AuthContext from './Contexts/AuthContext';
import { RoutesList } from './routes'

const App = () => {

  const auth = useContext(AuthContext);

  return (
    <div className="App w-[25rem] h-[36rem] bg-white overflow-hidden relative">
      <RoutesList></RoutesList>
      {auth.loading && <Loading />}
    </div>
  )
}

export default App
