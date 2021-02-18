import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [tasks, setTasks] = useState(
        [{
            id: 1,
            text: 'Doc App',
            day: 'Feb 5th at 2:00 PM',
            reminder: 'true'
        },
            {
                id: 2,
                text: 'Doc App 2.0',
                day: 'Feb 5th at 2:00 PM',
                reminder: 'true'
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 18th at 12:00 PM',
                reminder: 'true'
            }
        ]);

    const addTask = (task) => {
        console.log(task);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

     return (
    <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
