import './App.css';
import Navbar from './Components/Navbar';
import Status from './Components/Status';
import { AuthProvider } from './context/AuthContext';

function App() {
 
  return (
   <AuthProvider>
    <Navbar />
    <Status />
   </AuthProvider>
  
  );
}

export default App;
