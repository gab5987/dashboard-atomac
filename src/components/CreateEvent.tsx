import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './assets/createEvent.scss';

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';
registerLocale('ptBr', pt)
setDefaultLocale('ptBr');

class CreateEvent extends React.Component <{}, { startDate: any } > {
    constructor(props: any) {
        super(props);
        this.state = {
            startDate: undefined
        }
    }

    componentDidMount(): void {
        this.setState({ startDate: new Date() })
    }

    render() { console.log(this.state.startDate)
        return(
            <div className='App Create-event'>
                <div className='Create-event_modal'>
                <div className='Create-event_modal-context'>
                    {/* <div className='modal-header'>
                    <img width="50%" height="50%" 
                        src="https://seeklogo.com/images/R/republica-federativa-do-brasil-brasao-logo-66C22A3895-seeklogo.com.png"
                    />
                    <h2 className='pt-2'>Sistema de Gestão Predial</h2>
                    </div> */}

                    <form className='pt-3'>
                    <label> Nome do Evento: </label>
                    {/* <input className="form-control me-2" type="password"  
                        onChange={(event) => {this.setState({ userPass: event.target.value })}}
                    /> */}
                    <div className='pt-2' />
                    <div className='d-flex'>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={(date:Date) => { this.setState({ startDate: date}) }}
                            locale="pt-BR"
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={15}
                            dateFormat="Pp"
                        />
                    </div>


                    {/* <div className='pt-3 d-flex justify-content-center'>
                        <button className="btn btn-primary" type="button" style={{ marginRight: '10px' }} > Entrar </button>
                        <button className='btn btn-outline-info' type="button" style={{ marginRight: '10px' }}> Cadastrar Usuário </button>
                        <button className='btn btn-outline-warning' type="button" onClick={() => { this.setState({ isLoggedIn: true, userId: "guest" }) } }> Visitante </button>
                    </div> */}
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default CreateEvent;