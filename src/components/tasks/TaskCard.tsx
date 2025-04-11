import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskGroup } from '../../types/tasks';
import { calculateTaskProgress, getTaskStatus, getStatusInfo } from '../../utils/taskHelpers';
import '../../styles/components/TaskCard.css';

interface TaskCardProps {
  task: TaskGroup;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const navigate = useNavigate();
  const progress = calculateTaskProgress(task.subtasks);
  const status = getTaskStatus(task.subtasks);
  const statusInfo = getStatusInfo(status);

  const handleClick = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className="task-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="task-card-header">
        <div className="task-pre-title">{task.preTitle}</div>
        <div className="task-title">{task.title}</div>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%`, backgroundColor: statusInfo.color }}
        ></div>
      </div>
      <div className="progress-text">{`${progress}% Complete`}</div>
      <div className="divider-line"></div>
      <div className="task-footer">
        <p className="task-due-date">
          <span className="bold-text">Due Date: </span>
          {task.dueDate}
        </p>
        <div
          className="task-status"
          style={{ 
            backgroundColor: statusInfo.backgroundColor, 
            color: statusInfo.color, 
            fontWeight: 'bold' 
          }}
        >
          {statusInfo.label}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;