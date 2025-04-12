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
				title: 'Human Resources',
				path: 'teams/team1',
				icon: <IoIosPaper />,
			},
			{
				title: 'Information Technology',
				path: '/teams/team2',
				icon: <IoIosPaper />,
			},
			{
				title: 'Marketing',
				path: '/teams/team3',
				icon: <IoIosPaper />,
			},
			{
				title: 'Finance',
				path: '/teams/team4',
				icon: <IoIosPaper />,
			},
			{
				title: 'Operations',
				path: '/teams/team5',
				icon: <IoIosPaper />
			}
		],
	},
];

