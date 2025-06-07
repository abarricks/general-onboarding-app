import { makeAutoObservable, runInAction } from 'mobx';
import { TaskStatus } from '../types/status';
import { TaskGroup, SubTask } from '../types/tasks';
import { RootStore } from './RootStore';
import { dummyTasks } from '../data/dummyData';

interface UserTaskProgress {
  [taskId: string]: {
    [subtaskId: string]: TaskStatus;
  };
}

export class TaskStore {
  rootStore: RootStore;
  taskTemplate: TaskGroup[] = [];
  userProgress: UserTaskProgress = {};
  isLoading: boolean = true;
  currentUserId: string | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      rootStore: false
    });
    this.initializeStore();
  }

  setCurrentUser(userId: string) {
	runInAction(() => {
		this.currentUserId = userId;
		// this.syncUserProgress(userId);
	});
 }

//   setCurrentUser(userId: string) {
// 	runInAction(() => {  // ADD THIS LINE
// 	  this.currentUserId = userId;
// 	  this.userProgress(userId);
// 	});
//   }

  private async initializeStore() {
    // init with dummy data
    this.taskTemplate = dummyTasks;
    
    // load user progress from localStorage
    const savedProgress = localStorage.getItem('userTaskProgress');
    if (savedProgress) {
      this.userProgress = JSON.parse(savedProgress);
    }

    // init new tasks/subtasks from template
    this.taskTemplate.forEach(task => {
      if (!this.userProgress[task.id]) {
        this.userProgress[task.id] = {};
      }
      
      task.subtasks.forEach(subtask => {
        if (this.userProgress[task.id][subtask.id] === undefined) {
          this.userProgress[task.id][subtask.id] = 'not-started';
        }
      });
    });

    runInAction(() => {
      this.isLoading = false;
    });

    // save initial state
    this.saveProgress();
  }

  private saveProgress() {
    localStorage.setItem('userProgress', JSON.stringify(this.userProgress));
  }

  updateSubtaskStatus(taskId: string, subtaskId: string, status: TaskStatus) {
    runInAction(() => {
      if (!this.userProgress[taskId]) {
        this.userProgress[taskId] = {};
      }
      this.userProgress[taskId][subtaskId] = status;
      this.saveProgress();
    });
  }

  getSubtaskStatus(taskId: string, subtaskId: string): TaskStatus {
    return this.userProgress[taskId]?.[subtaskId] || 'not-started';
  }

  getTaskWithProgress(taskId: string): TaskGroup | undefined {
    const templateTask = this.taskTemplate.find(t => t.id === taskId);
    if (!templateTask) return undefined;

    return {
      ...templateTask,
      subtasks: templateTask.subtasks.map(subtask => ({
        ...subtask,
        status: this.getSubtaskStatus(taskId, subtask.id)
      }))
    };
  }

  getAllTasksWithProgress(): TaskGroup[] {
    return this.taskTemplate.map(task => ({
      ...task,
      subtasks: task.subtasks.map(subtask => ({
        ...subtask,
        status: this.getSubtaskStatus(task.id, subtask.id)
      }))
    }));
  }

  getTasksByPage(page: string): TaskGroup[] {
    return this.getAllTasksWithProgress().filter(task => task.page === page);
  }
}

{/*
  
import { makeAutoObservable, runInAction } from 'mobx';
import { TaskStatus } from '../types/status';
import { TaskGroup } from '../types/tasks';
import { UserProgress } from '../types/progress';
import { dummyTasks } from '../data/dummyData';

export class TaskStore {
  taskTemplate: TaskGroup[] = [];
  userProgress: UserProgress = {};
  isLoading: boolean = true;
  currentUserId: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initializeStore();
  }

   setCurrentUser(userId: string) {
   runInAction(() => {  // ADD THIS LINE
     this.currentUserId = userId;
     this.syncUserProgress(userId);
   }); // ADD THIS LINE
 }

 // No changes needed in initializeStore()
 private initializeStore() {
   try {
     this.taskTemplate = dummyTasks;
     const savedProgress = localStorage.getItem('userProgress');
     
     if (savedProgress) {
       this.userProgress = JSON.parse(savedProgress);
     }

     runInAction(() => {
       this.isLoading = false;
     });
   } catch (error) {
     console.error('Failed to initialize store:', error);
     this.isLoading = false;
   }
 }

 // Add runInAction here
 private syncUserProgress(userId: string) {
   if (!this.userProgress[userId]) {
     this.userProgress[userId] = {};
   }

   const userTasks = this.userProgress[userId];
   const updatedTasks = { ...userTasks };

   this.taskTemplate.forEach(task => {
     if (!updatedTasks[task.id]) {
       updatedTasks[task.id] = {};
     }

     task.subtasks.forEach(subtask => {
       if (updatedTasks[task.id][subtask.id] === undefined) {
         updatedTasks[task.id][subtask.id] = 'not-started';
       }
     });

     Object.keys(updatedTasks[task.id]).forEach(subtaskId => {
       if (!task.subtasks.some(s => s.id === subtaskId)) {
         delete updatedTasks[task.id][subtaskId];
       }
     });
   });

   Object.keys(updatedTasks).forEach(taskId => {
     if (!this.taskTemplate.some(t => t.id === taskId)) {
       delete updatedTasks[taskId];
     }
   });

   runInAction(() => {  // ADD THIS LINE
     this.userProgress[userId] = updatedTasks;
     this.saveProgress();
   }); // ADD THIS LINE
 }

  private saveProgress() {
    localStorage.setItem('userProgress', JSON.stringify(this.userProgress));
  }

  updateSubtaskStatus(taskId: string, subtaskId: string, status: TaskStatus) {
    if (!this.currentUserId) return;

    runInAction(() => {
      if (!this.userProgress[this.currentUserId]) {
        this.userProgress[this.currentUserId] = {};
      }
      if (!this.userProgress[this.currentUserId][taskId]) {
        this.userProgress[this.currentUserId][taskId] = {};
      }
      this.userProgress[this.currentUserId][taskId][subtaskId] = status;
      this.saveProgress();
    });
  }

  getSubtaskStatus(taskId: string, subtaskId: string): TaskStatus {
    if (!this.currentUserId) return 'not-started';
    return this.userProgress[this.currentUserId]?.[taskId]?.[subtaskId] || 'not-started';
  }

  getTaskWithProgress(taskId: string): TaskGroup | undefined {
    const templateTask = this.taskTemplate.find(t => t.id === taskId);
    if (!templateTask) return undefined;

    return {
      ...templateTask,
      subtasks: templateTask.subtasks.map(subtask => ({
        ...subtask,
        status: this.getSubtaskStatus(taskId, subtask.id)
      }))
    };
  }

  getTasksByPage(page: string): TaskGroup[] {
    return this.taskTemplate
      .filter(task => task.page === page)
      .map(task => ({
        ...task,
        subtasks: task.subtasks.map(subtask => ({
          ...subtask,
          status: this.getSubtaskStatus(task.id, subtask.id)
        }))
      }));
  }
}  
  
*/}