import { React } from 'react';
import Header from './components/header/header';
import Item from './components/item/item';

const App = () => (
  <div>
    <Header total={8} done={3} />
    <Item done={false} description="do my daily workout" id={1} />
  </div>
);

export default App;
