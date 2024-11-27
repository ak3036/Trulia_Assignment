import './App.css';
import Body from './component/Body';
import Explore from './component/Explore';
import Help from './component/Help';
import Homes from './component/Homes';
import Navbar from './component/navbar';

function App() {
  return (
    <div className='pt-16'>
      <Navbar />
      <Body />
      <Explore />
      <Homes />
      <Help />
    </div>
  );
}

export default App;
