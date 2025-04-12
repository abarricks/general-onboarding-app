import { observer } from 'mobx-react-lite';
import { useStore } from '../../contexts/StoreContext';
import TaskCard from '../../components/tasks/TaskCard';
import WelcomeBanner from '../../components/WelcomeBanner';
import '../../styles/pages/HomePage.css';

// Marketing Team Tasks
export const Team3Page = observer(() => {
  const { taskStore } = useStore();
  const team3Tasks = taskStore.getTasksByPage('marketing');
  
  if (taskStore.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-container">
      <WelcomeBanner
        preTitle="Welcome to the"
        title="TAP Onboarding Dashboard"
        description='This dashboard is dedicated to the specific tasks required for members of the Marketing team. Please ensure you complete all tasks listed here to successfully onboard to your team. If you have questions during the onboarding process, click the "Onboarding Assistant" button below for guidance from our chatbot.'
      />
      <div className="task-card-container">
        {team3Tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
});

export default Team3Page;
