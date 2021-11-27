
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes> 
    </div>
  );
}

export default App;
