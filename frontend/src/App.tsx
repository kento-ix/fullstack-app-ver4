import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/home/home';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
