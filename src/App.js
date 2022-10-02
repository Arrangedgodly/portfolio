import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = React.useState('home');
  
  return (
    <div className="App">
      <Header
        handleButtonClick={setActivePage} 
      />
      <Main 
        activePage={activePage}
      />
      <Footer />
    </div>
  );
}

export default App;
