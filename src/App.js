import './App.css';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import Status from './Components/Status';
import { AuthProvider } from './context/AuthContext';
import { LoadingProvider } from './context/LoadingContext';
import { TokenProvider } from './context/TokenContext';

function App() {
 
  return (
   <AuthProvider>
    <TokenProvider>
      <LoadingProvider>
    <Navbar />
    <Loading />
    <Status />
      </LoadingProvider>
    </TokenProvider>
   </AuthProvider>
  
  );
}

export default App;
