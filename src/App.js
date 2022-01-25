import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
      </section>
    );
  }
}

export default App;
