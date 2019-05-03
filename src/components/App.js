import React, { useState } from 'react';
import '../assets/App.css';
import MenuBar from './MenuBar';
import MenuBar2 from './MenuBar2';
import Info from './Info'

function App() {
  const [active, setActive] = useState('events')
  return (
    <div className="App" style={{
      backgroundColor: active === 'events' ? '#5B37B7'
        : active === 'search' ? '#BE3099'
        : active === 'featured' ? '#E39A28'
        : '#1194AA',
      transition: 'all 50ms linear'
    }}>
      <Info />
      <MenuBar
        active={active}
        setActive={setActive}
      />
      <MenuBar2 
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default App;
