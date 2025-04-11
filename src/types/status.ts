import { 
	RiProgress8Fill, 
	RiProgress5Line, 
	RiCheckboxCircleFill 
  } from "react-icons/ri";
  import { MdOutlinePending } from "react-icons/md";
  import { IconType } from 'react-icons';
  
  export type TaskStatus = 'not-started' | 'in-progress' | 'pending' | 'complete';
  
  export interface StatusConfig {
	color: string;
	label: string;
	Icon: IconType;
  }
  
  export const STATUS_CONFIG: Record<TaskStatus, StatusConfig> = {
	'not-started': {
	  color: '#666666',
	  label: 'Not Started',
	  Icon: RiProgress8Fill
	},
	'in-progress': {
	  color: '#fca465',
	  label: 'In Progress',
	  Icon: RiProgress5Line
	},
	'pending': {
	  color: '#7580e8',
	  label: 'Pending',
	  Icon: MdOutlinePending
	},
	'complete': {
	  color: '#15d088',
	  label: 'Complete',
	  Icon: RiCheckboxCircleFill
	}
  } as const;