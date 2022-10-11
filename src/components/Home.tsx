import React from "react";
import './assets/dashboard.scss';

export default class Dashboard extends React.Component <{
    resumeLanguage: any,
}, {}> {
    constructor(props: any){
        super(props);
    }
        
    render() {
        return (
        <>
            <div className="last-list_modal container border border-dark rounded">
                <div className="pt-1 d-flex justify-content-center"> 
                    <h2> {this.props.resumeLanguage.titles.last_calls} </h2> 
                </div>

                <p className="border border-dark rounded">
                    <a style={{paddingLeft: "1%"}}> data: 10/10/2022 local: 1P-06 nome Fulano de Tal Solicitação: desligar </a> <br/>
                    <a style={{paddingLeft: "1%"}}> data: 10/10/2022 local: 1P-06 nome Fulano de Tal Solicitação: desligar </a> <br/>
                    <a style={{paddingLeft: "1%"}}> data: 10/10/2022 local: 1P-06 nome Fulano de Tal Solicitação: desligar </a>
                </p>
            </div>

            <div className="dashboard-collum_modal">
                <div className="pt-2 dashboard-collum d-flex justify-content-center border border-dark rounded">
                    <h2> teste </h2>
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
}