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
        console.log(this.state.actualFloor)
        return(
            <div className="dashboard-collum_new-register">
                <h4> Cadastrar novo chamado </h4>
                <form>
                    <label>Local: </label>
                    <select value={ this.state.actualFloor } onChange={(event) => {this.setState({actualFloor: Number(event.target.value)})}}> 
                        { this.props.sharedData.floors.map((item: any, key: number) => { 
                            return <option value={key} > {item.name} </option> 
                        }) }
                    </select>
    
                    <select value={ this.state.actualCore } onChange={(event) => {this.setState({actualCore: Number(event.target.value)})}}> 
                        { this.props.sharedData.floors[this.state.actualFloor].cores.map((item: any, key: number) => { 
                            return <option value={key} > {item} </option> 
                        }) }
                    </select>
                    <br/>
    
                    <label>Nome: </label>
                    <input type="text" name="name" /> <br/>
    
                    <label>Solicitação: </label>
                    <select value={ this.state.request } onChange={(event) => {this.setState({request: Number(event.target.value)})}}> 
                        { this.props.sharedData.requests.map((item: any, key: number) => { 
                            return <option value={key} > {item} </option> 
                        }) }
                    </select>
                </form>
            </div>
        )
    }
}