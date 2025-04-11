import { TaskStatus } from './status';

export interface UserProgress {
	[userId: string]: {
		[taskId: string]: {
			[subtaskId: string]: TaskStatus;
		};
	};
}