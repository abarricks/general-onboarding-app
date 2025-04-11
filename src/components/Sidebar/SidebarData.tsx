import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import {IoIosPaper, IoMdPeople} from 'react-icons/io';
import {FaRobot} from "react-icons/fa6";
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';

export interface SidebarItem {
	title: string;
	path?: string;
	icon: JSX.Element;
	iconClosed?: JSX.Element;
	iconOpened?: JSX.Element;
	subNav?: SidebarItem[];
}

export const SidebarData: SidebarItem[] = [
	{
		title: 'Onboarding Home',
		path: '/',
		icon: <AiFillHome />,
	},
	{
		title: 'Resources',
		path: '/resources',
		icon: <IoIosPaper />,
	},
	
	{
		title: 'Onboarding Assistant',
		path: '/OnboardingAssistant',
		icon: <FaRobot />,
	},
	{
		title: 'Teams',
		icon: <IoMdPeople />,
		iconClosed: <RiArrowDownSFill />,
		iconOpened: <RiArrowUpSFill />,
		subNav: [
			{
				title: 'ESA-BAD',
				path: 'teams/team1',
				icon: <IoIosPaper />,
			},
			{
				title: 'ETID',
				path: '/teams/team2',
				icon: <IoIosPaper />,
			},
			{
				title: 'TAP',
				path: '/teams/team3',
				icon: <IoIosPaper />,
			},
			{
				title: 'EIDS',
				path: '/teams/team4',
				icon: <IoIosPaper />,
			},
			{
				title: 'AMEDD',
				path: '/teams/team5',
				icon: <IoIosPaper />
			}
		],
	},
];

