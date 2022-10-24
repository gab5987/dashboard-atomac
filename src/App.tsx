import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Home';
import EventsCalendar from './components/EventsCalendar';

import { Unauthorized } from './RaiseExeption';

const resumeLanguage = require('./data/res_primary_language.json');
const sharedData = require('./data/shared_data.json');
class App extends React.Component<{},
  { actualPage: string | null, userId: string | undefined, isLoggedIn: boolean, userPass: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      actualPage: null,
      userId: undefined,
      isLoggedIn: false,
      userPass: ""
    };
    this.raiseApp = this.raiseApp.bind(this);
    this.raiseLogin = this.raiseLogin.bind(this);
  }

  componentDidMount() {
    const url = new URLSearchParams(window.location.search);
    this.setState({
      actualPage: url.get('window_location') || "dashboard", 
      userId: url.get('user_id') || "guest",
      isLoggedIn: ( url.get('isLogged') === 'true' && true ) || false,
    });
    this.fetchUserID = this.fetchUserID.bind(this);
  }

  render() {
    return (
      <>
        { this.state.isLoggedIn ? this.raiseApp() : this.raiseLogin() }
      </>
    );
  }

  raiseLogin() {
    return(
      <div className='App App-Login'>
        <div className='App-Login_modal'>
          <div className='App-Login_modal-context'>
            <div className='modal-header'>
              <img width="50%" height="50%" 
                src="https://seeklogo.com/images/R/republica-federativa-do-brasil-brasao-logo-66C22A3895-seeklogo.com.png"
              />
              <h2 className='pt-2'>Sistema de Gestão Predial</h2>
            </div>

            <form className='pt-3'>
              <label> insira seu Token: </label>
              <input className="form-control me-2" type="password" 
                value={ this.state.userPass } 
                onChange={(event) => {this.setState({ userPass: event.target.value })}}
              />
              <div className='pt-2' />

              <div className='pt-3 d-flex justify-content-center'>
                <button className="btn btn-primary" type="button" style={{ marginRight: '10px' }} onClick={() => { this.fetchUserID() } } > Entrar </button>
                <button className='btn btn-outline-info' type="button" style={{ marginRight: '10px' }}> Cadastrar Usuário </button>
                <button className='btn btn-outline-warning' type="button" onClick={() => { this.setState({ isLoggedIn: true, userId: "guest" }) } }> Visitante </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

   fetchUserID() {
    fetch( "http://localhost:1234/com-regUser-id/" + this.state.userPass )
    .then((res) => res.json())
    .then((data) => { 
      data.id ? this.setState({ userId: data.id, isLoggedIn: true }) : alert("Token inválido");
    })
    .catch((err) => { throw new Unauthorized("Usuário não encontrado") })
  }

  raiseApp() {
    return(
      <div className="App">
        <Sidebar userId={ this.state.userId } isLoggedIn={ this.state.isLoggedIn } />
        <div className="App-context">
          { this.state.actualPage === 'dashboard' && <Dashboard 
              resumeLanguage={resumeLanguage.itens.dashboard}
              sharedData={sharedData} 
            /> }
          { 
            this.state.actualPage === 'monthlyRegister' && ( 
              this.state.userId === 'guest' ? <Unauthorized /> : <h1> teste </h1>
            )
          }
          { 
            this.state.actualPage === 'settings' && ( 
              this.state.userId === 'guest' ? <Unauthorized /> : <h1> teste </h1>
            )
          }
          { 
            this.state.actualPage === 'nextEvents' && <EventsCalendar />
          } 
        </div>
      </div>
    )
  }
}
export default App;