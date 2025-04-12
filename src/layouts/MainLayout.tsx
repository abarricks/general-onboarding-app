import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import '../styles/MainLayout.css';

import styled from 'styled-components';
// import InstructionsPopUp from '../components/InstructionsPopUp';
// import { instructionStore } from '../stores/InstructionStore';

const MainLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // useEffect(() => {
    //     if(!instructionStore.doNotShowInstructions) {
    //         instructionStore.openPopup();
    //     }
    // }, []);

    return (
        <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Sidebar onToggle={() => setSidebarOpen(!sidebarOpen)}/>
            <main className="content">
                <Outlet />
            </main>
            {/* <InstructionsPopUp/> */}
        </div>
    );
};

export default MainLayout;