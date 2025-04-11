import React, {useState} from 'react';
import { RiAlignItemBottomFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface SidebarItem {
	title: string;
	path?: string;
	icon?: JSX.Element;
	subNav?: SidebarItem[];
}

const SidebarLink = styled(Link)<{ hasSubNav: boolean; sidebarOpen: boolean }>`
	display: flex;
	align-item: center;
	padding: 10px 20px;
	height: 50px;
	text-decoration: none;
	font-size: 16px;
	color: #e1e9fc;
	background: transparent;
	border-radius: 4px;
	white-space: nowrap;
	width: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '60px')};
	transition: width 0.6s, background 0s ease;

	&:hover {
		background: #252831;
		border-left: 4px solid #632ce4;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span<{sidebarOpen: boolean}>`
	margin-left: 16px;
	visibility: ${({sidebarOpen}) => (sidebarOpen ? 'visible' : 'hidden')};
`;

const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	position: relative;
`;

const VerticalLine = styled.div`
	width: 2px;
	background: #2d2f39;
	position: absolute;
	left: 8px;
	top: 0;
	bottom: 0;
`;

const DropdownLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 8px 16px;
	text-decoration: none;
	color: #b0b3c5;
	font-size: 14px;
	background: transparent;
	border-radius: 4px;
	margin-top: 4px;
	position: relative;
	margin-left: 14px;
	width: calc(100% - 60px);
	white-space: nowrap;

	&:hover {
		background: #252831;
		border-left: 4px solid #632ce4;
		cursor: pointer;
	}
`;

interface SubMenuProps {
	item: SidebarItem;
	sidebarOpen: boolean;
	onToggleSidebar: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({item, sidebarOpen, onToggleSidebar}) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => {
		if (!sidebarOpen && item.subNav) {
			onToggleSidebar();
			setSubnav(true);
		} else if (sidebarOpen && item.subNav) {
			setSubnav(!subnav);
		}
	};

	return (
		<>
			<SidebarLink 
				to={item.path ?? '#'}
				onClick={item.subNav && showSubnav}
				hasSubNav={!!item.subNav}
				sidebarOpen={sidebarOpen}
			>
				<div>
					{item.icon && <span>{item.icon}</span>}
					<SidebarLabel sidebarOpen={sidebarOpen}>{item.title}</SidebarLabel>
				</div>
			</SidebarLink>
			{sidebarOpen && subnav && item.subNav && (
				<DropdownContainer>
					<VerticalLine />
					{item.subNav.map((subItem, index) => (
						<DropdownLink to={subItem.path ?? '#'} key={index}>
							<SidebarLabel sidebarOpen={sidebarOpen}>{subItem.title}</SidebarLabel>
						</DropdownLink>
					))}
				</DropdownContainer>
			)}
		</>
	);
};

export default SubMenu;