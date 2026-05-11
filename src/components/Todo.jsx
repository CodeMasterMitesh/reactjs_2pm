import { useState } from 'react';
import './Todo.css';
import { useSelector } from 'react-redux';
import { store } from '../Store.jsx';

console.log("store in todo", store);
const tasks = [
  {
    title: 'Review React notes',
    detail: 'Finish hooks summary and mark tricky examples.',
    time: '09:30 AM',
    tag: 'Study',
    priority: 'High',
    done: true,
  },
];

const Todo = () => {
  
  const tasks = useSelector((state) => state.task);
  const [task, setTask] = useState("");
  const completedTasks = tasks.filter((task) => task.done).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted task", task);
    // if(task.trim() === "") return;
    // store.dispatch({type : "add/task", payload : {title : task, detail : "No details", time : "10:00 AM", tag : "General", priority : "Low", done : false}});
    // setTask("");
  }
  console.log("store in todo", store);

  return (
    <main className="todo-shell">
      <section className="todo-app" aria-label="Todo app preview">
        <aside className="todo-sidebar">
          <div className="todo-brand">
            <span className="todo-brand-mark">T</span>
            <div>
              <h1>TaskFlow</h1>
              <p>Daily focus board</p>
            </div>
          </div>

          <div className="todo-stat-card">
            <p>Completed today</p>
            <span className="todo-stat-value">
              {completedTasks}/{tasks.length}
            </span>
            <div className="todo-progress-track">
              <div className="todo-progress-bar" />
            </div>
          </div>

          <div className="todo-stat-card">
            <p>Focus score</p>
            <span className="todo-stat-value">86%</span>
          </div>

          <nav className="todo-quick-list" aria-label="Task views">
            <button className="active">Today</button>
            <button>Upcoming</button>
            <button>Important</button>
            <button>Completed</button>
          </nav>
        </aside>

        <section className="todo-content">
          <header className="todo-topbar">
            <div>
              <p className="todo-eyebrow">Your workspace</p>
              <h2>Make today count.</h2>
            </div>
            <span className="todo-date-pill">Friday, May 8</span>
          </header>
          <form action={handleSubmit}>
            <div className="todo-composer" aria-label="Add task form preview">
              <div className="todo-input-box">
                <span className="todo-input-label">New task</span>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} className='todo-fake-input'  placeholder='Design a clean todo app UI'/>
              </div>
              <button type='submit' className="todo-add-button">Add Task</button>
            </div>
          </form>

          <div className="todo-filter-bar" aria-label="Task filters">
            <button className="active">All Tasks</button>
            <button>Active</button>
            <button>Done</button>
            <button>High Priority</button>
          </div>

          <div className="todo-task-list">
            {tasks.map((task) => (
              <article className={`todo-task-card ${task.done ? 'done' : ''}`} key={task.title}>
                <span className="todo-check">✓</span>
                <div>
                  <h3 className="todo-task-title">{task.title}</h3>
                  <p className="todo-task-detail">{task.detail}</p>
                  <p className="todo-task-meta">
                    <span>{task.time}</span>
                    <span className="todo-chip">{task.tag}</span>
                  </p>
                </div>
                <span className={`todo-priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Todo;
