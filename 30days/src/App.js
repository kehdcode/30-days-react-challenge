import React from 'react';
import Header from './Header'
import './App.css';

class App extends React.Component {
  render(){
    return(
        <div className="notificationsFrame">
          <div className="panel">
            <Header />

          </div>
        </div>
    );
  }
}

export default App;
