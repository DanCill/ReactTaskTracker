const tasks = [
    {
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
    }
];

const Tasks = () => {
    return (
        <>
            {
                tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))
            }
        </>
    )
}

export default Tasks