import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Home';

const resumeLanguage = require('./data/res_primary_language.json');
const sharedData = require('./data/shared_data.json');

class App extends React.Component<{},
  { actualPage: string | null, userId: string | undefined }> {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: null,
      userId: undefined,
    };
  }

  componentDidMount() {
    const url = new URLSearchParams(window.location.search);
    this.setState({
      actualPage: url.get('window_location'), 
      userId: url.get('user_id') || "guest"
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar userId={ this.state.userId } />
        <div className="App-context">
          { this.state.actualPage === 'dashboard' && <Dashboard 
              resumeLanguage={resumeLanguage.itens.dashboard}
              sharedData={sharedData} 
            /> }
        </div>
      </div>
    );
  }
}
export default App;