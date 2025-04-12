import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../contexts/StoreContext';
import WelcomeBanner from '../../components/WelcomeBanner';
import SubTaskItem from '../../components/tasks/SubTaskItem';
import '../../styles/pages/SubTaskPage.css';

const SubTaskPage = observer(() => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { taskStore } = useStore();
  const task = taskStore.getTaskWithProgress(taskId!);
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  /* Function to gandle navigation based on task page property */
  const handleReturn = () => {
    if(!task) return navigate('/');

    // If general task -> return to home page
    if (task.page === 'general') {
      navigate('/');
    } else if (task.page === 'hr') {
      navigate('/teams/Team1');
    } else if (task.page === 'it') {
      navigate('/teams/Team2');
    } else if (task.page === 'finance') {
      navigate('/teams/Team3');
    } else if (task.page === 'marketing') {
      navigate('/teams/Team4');
    } else if (task.page === 'ops') {
      navigate('/teams/Team5');
    }
  };

  /* Function to get return button text */
  const getReturnButtonText = () => {
    if (!task) return 'Return to Home';

    if (task.page === 'general') {
      return 'Return to all General Tasks'
    }

    const teamName = task.preTitle;
    return `Return to all ${teamName} Tasks`
  };

  if (taskStore.isLoading) {
    return <div>Loading...</div>;
  }

  if (!task) {
    return (
      <div className="not-found">
        <h2>Task not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="subtask-page">
      <WelcomeBanner
        preTitle={`${task.preTitle} Tasks`}
        title={task.title}
        description="View task details and track progress. Click the icon next to the title to update the status."
      />
      <div className="subtasks-container">
        {task.subtasks.map(subtask => (
          <SubTaskItem
            key={subtask.id}
            subtask={subtask}
            isExpanded={expandedTaskId === subtask.id}
            onToggleExpand={() => setExpandedTaskId(
              expandedTaskId === subtask.id ? null : subtask.id
            )}
            onStatusChange={(status) => {
              taskStore.updateSubtaskStatus(task.id, subtask.id, status);
            }}
          />
        ))}
      </div>
      <div className="return-button-container">
        <button className="return-button" onClick={handleReturn}>
          {getReturnButtonText()}
        </button>
      </div>
    </div>
  );
});

export default SubTaskPage;