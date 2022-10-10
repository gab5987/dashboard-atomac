import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import './sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTableColumns,
    faCircleExclamation,
    faCalendarDays,
    faNewspaper,
    faGears,
    faQuestion,
    faUser
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props: any) => {
    return(
        <ProSidebar className='App-sidebar'>
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
                        <a href="#"> Dashboard </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                        <a href="#"> Preventivas </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                        <a href="#"> Eventos </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />}>
                        <a href="#"> Relatório mensal </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faGears} />}>
                        <a href="#"> Preferências </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faQuestion} />}>
                        <a href="#"> Ajuda </a>
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                <Menu iconShape="circle" className='exit-button'>
                    <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                        <a href="/home"> Sair </a>
                    </MenuItem>
                </Menu>
            </SidebarFooter>

        </ProSidebar>
    );
}
export default Sidebar;