
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavitation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </Layout>
  );
}

export default App;
