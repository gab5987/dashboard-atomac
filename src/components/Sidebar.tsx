import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import './assets/sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTableColumns,
    faCircleExclamation,
    faCalendarDays,
    faPlus,
    faNewspaper,
    faGears,
    faQuestion,
    faUser
} from '@fortawesome/free-solid-svg-icons';

class Sidebar extends React.Component<{ userId: string | undefined, isLoggedIn: boolean }, { }> {
    render() {
        return(
            <ProSidebar className='App-sidebar border border-dark rounded'>
                <SidebarHeader>
                    <div className="App-sidebar-header pt-3 d-flex justify-content-center">
                        <img width="50%" height="50%" 
                        src="https://seeklogo.com/images/R/republica-federativa-do-brasil-brasao-logo-66C22A3895-seeklogo.com.png"
                        />
                    </div>
                    <div className=" pt-2 d-flex justify-content-center"> <h2> JFSC </h2> </div>
                    <div className="d-flex justify-content-center"> <h3> Controle Predial </h3> </div>
                </SidebarHeader>
    
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FontAwesomeIcon icon={faTableColumns} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=dashboard`} > Dashboard </a>
                        </MenuItem>
    
                        <MenuItem icon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=prevent`} > Preventivas </a>
                        </MenuItem>
    
                        <MenuItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=nextEvents`} > Eventos </a>
                        </MenuItem>

                        <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=createEvent`} > Cadastro de Evento </a>
                        </MenuItem>
    
                        <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=monthlyRegister`} > Relatório mensal </a>
                        </MenuItem>
    
                        <MenuItem icon={<FontAwesomeIcon icon={faGears} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=settings`} > Preferências </a>
                        </MenuItem>
    
                        <MenuItem icon={<FontAwesomeIcon icon={faQuestion} />}>
                            <a href = {`\?user_id=${this.props.userId}&isLogged=${this.props.isLoggedIn.toString()}&window_location=help`} > Ajuda </a>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
    
                <SidebarFooter>
                    <Menu iconShape="circle" className='exit-button'>
                        <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                            <a href="/"> Sair </a>
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
    
            </ProSidebar>
        );
    }
}
export default Sidebar;