import { useState } from 'react';
import './Todo.css';
import { useSelector } from 'react-redux';
import {addTask,deleteTask , store} from '../Store.jsx';
import {fetchTask} from '../Store.jsx';


const Todo = () => {
  
  const tasks = useSelector((state) => state.task);
  // console.log("state of store" ,tasks);

  const [task, setTask] = useState("");

  const completedTasks = tasks.filter((task) => task.done).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted task", task);
    store.dispatch(addTask(task));
    setTask("");
  }
  // console.log("store in todo", store);
  const fetchTaskHandler = () => {
    console.log("fetch task");
    store.dispatch(fetchTask());
  }
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
          <form onSubmit={handleSubmit}>
            <div className="todo-composer" aria-label="Add task form preview">
              <div className="todo-input-box">
                <span className="todo-input-label">New task</span>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} className='todo-fake-input'  placeholder='Design a clean todo app UI'/>
              </div>
              <button type='submit' className="todo-add-button">Add Task</button>
            </div>
          </form>
          <button onClick={fetchTaskHandler} className="todo-add-button" style={{padding: '5px',width: '150px',margin : '10px 0',backgroundColor :'#4CAF50'}}>Fetch Task</button>

          <div className="todo-filter-bar" aria-label="Task filters">
            <button className="active">All Tasks</button>
            <button>Active</button>
            <button>Done</button>
            <button>High Priority</button>
          </div>

          <div className="todo-task-list">
            {tasks.map((task,index) => (
              <article className={`todo-task-card ${task.done ? 'done' : ''}`} key={index}>
                <span className="todo-check">✓</span>
                <div>
                  <h3 className="todo-task-title">{task}</h3>
                  {/* <p className="todo-task-detail">{task.detail}</p> */}
                  {/* <p className="todo-task-meta">
                    <span>{task.time}</span>
                    <span className="todo-chip">{task.tag}</span>
                  </p> */}
                  <button onClick={() => store.dispatch(deleteTask(index))}>Del</button>
                </div>
                {/* <span className={`todo-priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span> */}
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Todo;
