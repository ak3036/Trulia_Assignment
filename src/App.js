import './App.css';
import SearchBar from './component/SearchBar';
import Explore from './component/Explore';
import Help from './component/Help';
import Homes from './component/Homes';
import Navbar from './component/navbar';

function App() {
  return (
    <div className='pt-16'>
      <Navbar />
      <SearchBar />
      <Explore />
      <Homes />
      <Help />
    </div>
  );
}

export default App;
