import React from "react";
import './assets/dashboard.scss';
import Clock from 'react-live-clock';
import { Console } from "console";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faPlus,
    faPhone,
    faCalendarDay,
    faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';

export default class Dashboard extends React.Component <{
    resumeLanguage: any,
    sharedData: any
}, {actualFloor: number, actualCore: number, request: number, searchBoxValue: string, callerName: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            actualFloor: 0,
            actualCore: 0,
            callerName: "Fulano de tal",
            request: 0,
            searchBoxValue: ""
        }
        this.newRegister = this.newRegister.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        
    render() {
        return (
        <>
            <div className="last-list_modal container border border-dark rounded">
                <div className="pt-1 d-flex justify-content-center"> 
                    <h2> <FontAwesomeIcon icon={faList} /> {this.props.resumeLanguage.titles.last_calls} </h2> 
                </div>

                <div className="d-flex">
                    <p className="p-2 flex-fill border border-secondary rounded">
                        <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal  Solicitação: desligar </a> <br/>
                        <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal   Solicitação: desligar </a> <br/>
                        <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal   Solicitação: desligar </a>
                    </p>

                    <p className="p-1 flex-fill border border-secondary rounded text-center">
                        <h1 className="display-1">
                            <Clock format="HH:mm:ss" ticking={true} interval={1000} />
                        </h1>
                    </p>
                </div>
            </div>

            <div className="dashboard-collum_modal">
                <div className="dashboard-collum border border-2 border-dark rounded">
                    { this.newRegister() }
                    { this.searchPhone() }
                </div>

                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-2 border-dark rounded">
                    <h4> <FontAwesomeIcon icon={faCalendarDay} /> {this.props.resumeLanguage.titles.next_events} </h4>
                </div>
                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-2 border-dark rounded">
                    <h4> <FontAwesomeIcon icon={faScrewdriverWrench} /> {this.props.resumeLanguage.titles.next_prevent} </h4>
                </div>
            </div>
        </>
        )
    }
    searchPhone = () => {
        return(
            <div className="dashboard-collum_search-phone">
                <div className="pt-2 d-flex justify-content-center">
                    <h4> <FontAwesomeIcon icon={faPhone} /> { this.props.resumeLanguage.titles.search_phone } </h4>
                </div>
                <div className="search-box"> 
                    <form className="d-flex pb-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            value={ this.state.searchBoxValue } 
                            onChange={(event) => {this.setState({searchBoxValue: event.target.value})}}
                        />
                        <button className="btn btn-outline-success" type="submit"> Buscar </button>
                    </form>
                    <div className="display-data">
                        <ul className="list-group">
                            { this.props.sharedData.phone.map( (item: any) => {
                                return(
                                    item.toLowerCase().includes(this.state.searchBoxValue.toLowerCase()) && <li className="list-group-item"> {item} </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    handleSubmit(event: any) {
        event.preventDefault();
        submitNewRegister(this.state, this.props.sharedData);
        return false;
    }

    newRegister = () => {
        return(
            <div className="dashboard-collum_new-register border-bottom border-dark rounded">
                <div className="pt-2 d-flex justify-content-center">
                    <h4> <FontAwesomeIcon icon={faPlus} /> { this.props.resumeLanguage.titles.new_call } </h4>
                </div>
                <div className="pb-1" />

                <form className="container">
                    <div className="location">
                        <label style={{ paddingRight: "2%"}}>Local: </label>
                        <select 
                            className="form-select form-select-sm" 
                            value={ this.state.actualFloor } 
                            onChange={(event) => {this.setState({actualFloor: Number(event.target.value)})}}> 

                            { this.props.sharedData.floors.map((item: any, key: number) => { 
                                return <option value={key} > {item.name} </option> 
                            }) }

                        </select>

                        <div style={{ width: "75%", paddingLeft: "1%"}}>
                            <select
                            className="form-select form-select-sm" 
                            value={ this.state.actualCore } 
                            onChange={(event) => {this.setState({actualCore: Number(event.target.value)})}}> 

                            { this.props.sharedData.floors[this.state.actualFloor].cores.map((item: any, key: number) => { 
                                return <option value={key} > {item} </option> 
                            }) }
                            </select>
                        </div>
                    </div>
                    <div className="pb-3" />
    
                    <div className="d-flex">
                        <label style={{ paddingRight: "2%"}}>Nome: </label>
                        <input className="form-control" type="text" name="name" />
                    </div>
                    <div className="pb-3" />

                    <div className="d-flex">
                        <label style={{ paddingRight: "2%"}}>Solicitação: </label>
                        <select 
                            className="form-select form-select-sm"
                            value={ this.state.request } 
                            onChange={(event) => {this.setState({request: Number(event.target.value)})}}> 

                            { this.props.sharedData.requests.map((item: any, key: number) => { 
                                return <option value={key} > {item} </option> 
                            }) }
                        </select>
                    </div>
                    <div className="pt-3 d-flex">
                        <button className="btn btn-primary" onClick={ () => this.handleSubmit } type="submit">Registrar chamado</button>
                    </div>
                </form>
                <div className="pb-3" />
            </div>
        )
    }
}

function submitNewRegister(props: any, sharedData: any) {
    console.log("entrou")
    const data = { 
        floor: sharedData.floors[props.actualFloor].name,
        core: sharedData.floors[props.actualFloor].cores[props.actualCore],
        name: props.callerName,
        requestType: sharedData.requests[props.request],
        date: "11/06/2022",
        attendant: "Gabriel"
    };

    fetch('http://localhost:1234/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    return undefined;
}