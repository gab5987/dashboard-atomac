import React from "react";
import './assets/dashboard.scss';

export default class Dashboard extends React.Component <{
    resumeLanguage: any,
    sharedData: any
}, {actualFloor: number, actualCore: number, request: number }> {

    constructor(props: any) {
        super(props);
        this.state = {
            actualFloor: 0,
            actualCore: 0,
            request: 0,
        }
        this.newRegister = this.newRegister.bind(this);
    }
        
    render() {
        return (
        <>
            <div className="last-list_modal container border border-dark rounded">
                <div className="pt-1 d-flex justify-content-center"> 
                    <h2> {this.props.resumeLanguage.titles.last_calls} </h2> 
                </div>

                <p className="border border-dark rounded">
                    <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal   Solicitação: desligar </a> <br/>
                    <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal   Solicitação: desligar </a> <br/>
                    <a style={{paddingLeft: "1%"}}> 1P-06 Nome: Fulano de Tal   Solicitação: desligar </a>
                </p>
            </div>

            <div className="dashboard-collum_modal">
                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-dark rounded">
                    { this.newRegister() }
                </div>

                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-dark rounded">
                    <h2> {this.props.resumeLanguage.titles.next_events} </h2>
                </div>
                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-dark rounded">
                    <h2> {this.props.resumeLanguage.titles.next_prevent} </h2>
                </div>
            </div>
        </>
        )
    }

    newRegister = () => {
        return(
            <div className="dashboard-collum_new-register">
                <div className="d-flex justify-content-center">
                    <h4> { this.props.resumeLanguage.titles.new_call } </h4>
                </div>
                <div className="pb-1" />

                <form className="container" >
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
                        <button className="btn btn-primary" type="submit">Registrar chamado</button>
                    </div>
                </form>
            </div>
        )
    }
}