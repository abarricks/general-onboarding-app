import { TaskStore } from './taskStore';

export class RootStore {
	taskStore: TaskStore;
	constructor() {
		this.taskStore = new TaskStore();
	}
}