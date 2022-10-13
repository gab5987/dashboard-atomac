import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Home';

const resumeLanguage = require('./data/res_primary_language.json');
const sharedData = require('./data/shared_data.json');

class App extends React.Component<{}, {actualPage: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: 'dashboard',
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App-context">
          {
            this.state.actualPage === 'dashboard' && <Dashboard 
              resumeLanguage={resumeLanguage.itens.dashboard}
              sharedData={sharedData} 
            />
            
          }
        </div>
      </div>
    );
  }
}
export default App;