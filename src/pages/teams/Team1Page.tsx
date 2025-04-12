import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../contexts/StoreContext';
import TaskCard from '../../components/tasks/TaskCard';
import WelcomeBanner from '../../components/WelcomeBanner';
import '../../styles/pages/HomePage.css';

// Human Resources Page
export const Team1Page = observer(() => {
  const { taskStore } = useStore();
  const team1Tasks = taskStore.getTasksByPage('hr');
  
  if (taskStore.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-container">
      <WelcomeBanner
        preTitle="Welcome to the"
        title="Human Resources Onboarding Dashboard"
        description='This dashboard is dedicated to the specific tasks required for members of the Human Resources team. Please ensure you complete all tasks listed here to successfully onboard to your team. If you have questions during the onboarding process, click the "Onboarding Assistant" button below for guidance from our chatbot.'
      />
      <div className="task-card-container">
        {team1Tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
});

export default Team1Page;

