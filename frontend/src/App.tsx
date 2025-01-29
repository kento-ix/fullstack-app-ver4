import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/home/home';
import Header from './common/Header';
import Listing from './pages/listing/listing';
import Setting from './pages/setting/setting';
import Favorite from './pages/favorite/favorite';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='mylisting' element={<Listing />}/>
          <Route path='favorite' element={<Favorite />}/>
          <Route path='setting' element={<Setting />}/>
        </Routes>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
