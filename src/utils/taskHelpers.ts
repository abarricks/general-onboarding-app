import { SubTask, TaskGroup } from "../types/tasks";
import { TaskStatus, STATUS_CONFIG } from "../types/status";

export const calculateTaskProgress = (subtasks: SubTask[]): number => {
  const completedTasks = subtasks.filter(task => task.status === 'complete').length;
  return Math.round((completedTasks / subtasks.length) * 100);
};

export const getTaskStatus = (subtasks: SubTask[]): TaskStatus => {
  const hasComplete = subtasks.every(task => task.status === 'complete');
  const hasPending = subtasks.some(task => task.status === 'pending');
  const hasInProgress = subtasks.some(task => task.status === 'in-progress');
  const hasNotStarted = subtasks.every(task => task.status === 'not-started');

  if (hasComplete) return 'complete';
  if (hasPending) return 'pending';
  if (hasInProgress) return 'in-progress';
  if (hasNotStarted) return 'not-started';
  return 'in-progress';
};

export const getStatusInfo = (status: TaskStatus) => {
  const config = STATUS_CONFIG[status];
  return {
    ...config,
    backgroundColor: `${config.color}33`
  };
};