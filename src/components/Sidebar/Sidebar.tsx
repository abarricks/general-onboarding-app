import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FiSidebar, FiInfo} from 'react-icons/fi';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import {instructionStore} from '../../stores/InstructionStore';
import {IconContext} from 'react-icons/lib';

interface SidebarProps {
    onToggle: (isOpen: boolean) => void;
}

const Nav = styled.div`
    background: #1517c;
    height: 80px;
    display: flex;
    justify-context: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)<{ sidebarOpen: boolean }>`
    margin-left: 0.85rem;
    font-size: 1.8rem;
    height: 80px;
    display: flex;
    align-items: center;
    transition: margin-left 0.3s;
`;

const SidebarNav = styled.nav<{ sidebar: boolean}>`
    background: #15171c;
    width: ${({sidebar}) => (sidebar ? '250px' : '60px')};
    height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    transition: width 0.3s;
    z-index: 10;
`;

const SidebarWrap = styled.div<{ sidebar: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${({ sidebar }) => (sidebar ? '250px' : '60px')};
    min-width: ${({ sidebar }) => (sidebar ? '250px' : '60px')};
    overflow: hidden;
`;

const InfoIconContainer = styled.div`
    margin-top: auto;
    text-align: center;
    padding-bottom: 20px;
`;

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
    const [sidebar, setSidebarOpen] = useState(false);

    // toggle sidebar open/close & notify parent
    const showSidebar = () => {
        const newSidebarState = !sidebar;
        setSidebarOpen(newSidebarState);
        onToggle(newSidebarState);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavIcon to="#" sidebarOpen={sidebar}>
                        <FiSidebar onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap sidebar={sidebar}>
                        <NavIcon to="#" sidebarOpen={sidebar}>
                            <FiSidebar onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item, index) => (
                            <SubMenu
                                item={item}
                                key={index}
                                sidebarOpen={sidebar}
                                onToggleSidebar={showSidebar}
                            />
                        ))}
                        <InfoIconContainer>
                            <FiInfo
                                size={20}
                                style={{cursor: 'pointer'}}
                                onClick={() => instructionStore.openPopup()}
                            />
                        </InfoIconContainer>
                    </SidebarWrap>
                    
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;