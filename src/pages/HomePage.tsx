import { observer } from 'mobx-react-lite';
import { useStore } from '../contexts/StoreContext';
import TaskCard from '../components/tasks/TaskCard';
import WelcomeBanner from '../components/WelcomeBanner';
import '../styles/pages/HomePage.css';

export const HomePage = observer(() => {
  const { taskStore } = useStore();
  const generalTasks = taskStore.getTasksByPage('general');

  if (taskStore.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-container">
      <WelcomeBanner
        preTitle="Welcome to the"
        title="General Onboarding Dashboard"
        description='This dashboard serves as your primary resource for completing tasks required for all practitioners. It includes general tasks that everyone must finish. For team-specific tasks, please check your Team Dashboard via the sidebar. If you have questions during the onboarding process, click the "Onboarding Assistant" button below for guidance from our chatbot.'
      />
      <div className="task-card-container">
        {generalTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
});

