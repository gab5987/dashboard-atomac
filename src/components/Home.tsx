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
            <div className="last-list_modal container">
                <div className="pt-1 d-flex justify-content-center"> <h2> {this.props.resumeLanguage.titles.last_calls} </h2> </div>
            </div>
        )
    }
}