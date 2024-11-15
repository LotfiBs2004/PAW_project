import React, { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './menu.css';
function App() {
  return(
      <div className="App">
    <Sign />
    <Types />
    <UpInfos />
    <TaskTable />
</div>
  );
}
//the icons below didnt work fix them :)
const Sign = () => (
  <div className="sign">
    <ul className="icons">
      <p className="text">Power<br />Plan</p>
      <li className="icon"><a href="#" id="current"><i className="fa fa-tasks fa-lg" aria-hidden="true"></i></a></li> 
      <li className="icon"><a href="#"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a></li>
      <li className="icon"><a href="#"><i className="fa fa-check-square-o fa-lg" aria-hidden="true"></i></a></li>
      <li className="icon"><a href="#"><i className="fa fa-calendar-check-o fa-lg" aria-hidden="true"></i></a></li>
      <li className="icon"><a href="#"><i className="fa fa-user fa-lg" aria-hidden="true"></i></a></li>
      <li className="icon"><a href="#"><i className="fa fa-sign-out fa-lg" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  );
  
  const Types = () => (
  <div className="types">
    <ul className="importance">
      <h2>importance</h2>
      <li className="first"><button>all</button></li>
      <li><button>not important</button></li>
      <li><button>Less important</button></li>
      <li><button>important</button></li>
    </ul>
    <ul className="category">
      <h2>category
        <button className="plus"><i className="fa fa-plus" aria-hidden="true"></i></button>
      </h2>
      <li className="first"><button>all</button></li>
      <li><button>sport</button></li>
      <li><button>Learning</button></li>
      <li><button>university</button></li>
    </ul>
  </div>
  );
  
  const UpInfos = () => (
  <div className="upinfos">
    <h2>Welcome</h2>
    <h2 className="user"><i className="fa fa-sign-out" aria-hidden="true"></i> user10669 <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></h2>
  </div>
  );
  const TaskTable = () => {
    const [data, setData] = useState([]);
    const [title, settitle] = useState([]);
    const [category, setcategory] = useState([]);
    const [importance, setimportance] = useState([]);
    const [progress, setprogress] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3000/task')
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }, []);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const selectRef = useRef();
  const handsubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/task', {title: title,category: category,importance: importance,progress: '0/'+progress})
    .then(res => {
      window.location.reload();
    })
    .catch(er => console.log(er))
  }
    return (
      <div className="table">
      <table className="taskstable">
        <tr>
        <td className= "todo">
      <table className="tb">
        <tr>
          <td>
            <h3>TO Do</h3>
            <h5>
              <button className="add" onClick ={openPopup}>new task</button>
            </h5>
          </td>
        </tr>
        {data.map((task, index) => (
           <tr key = {index} className="tasks">
           <td>
             <span className="contentsk">
               <h3>{task.title}</h3>
               <h5>{task.category}</h5>
               <button className="parameter">...</button>
               <div className="progresstsk">
                 <span>Progress</span>
                 <span className="percent">{task.progress}</span>
                 <div className="bar">
                   <span></span>
                   <div className="prog" id={task.progressId}><span></span></div>
                 </div>
                 <button className="importancetsk" id={task.importance}>{task.importance}</button>
               </div>
             </span>
           </td>
         </tr>
        ))}
      </table>
      </td>
      <td className= "progress">
      <table className="tb">
        <tr>
          <td>
            <h3>Progress</h3>
            <h5>
              <button className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
              <p>       </p>
            </h5>
          </td>
        </tr>
      </table>
      </td>
      <td className= "done">
      <table className="tb">
        <tr>
          <td>
            <h3>Done</h3>
            <h5>
              <button className="add"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
              <p>       </p>
            </h5>
          </td>
        </tr>
        
    </table>
    </td>
    </tr>
    </table>
    {
          isPopupOpen && (
            <div className="popup">
              <div className="popup-inner">
                <h2>Name task<input type='text' placeholder='task' onChange={e => settitle(e.target.value)}></input></h2>
                <h2><label htmlFor="select">category:</label>
      <select id="select" ref={selectRef} onChange={e => setcategory(e.target.value)}>
        <option value="university">university</option>
        <option value="gym">gym</option>
        <option value="learning">learning</option>
      </select></h2>
      <h2><label htmlFor="select">importance:</label>
      <select id="select" ref={selectRef} onChange={e => setimportance(e.target.value)}>
        <option value="important">Important</option>
        <option value="less important">Less important</option>
        <option value="not important">not important</option>
      </select></h2>
      <h2>overal progress:<input type='text' placeholder='progress' onChange={e => setprogress(e.target.value)}></input></h2>
      <button class ="closebtn" onClick={closePopup}>x</button>
      <button class ="butonadd" onClick={handsubmit}>Add</button>
    </div>

              </div>
        )}
    </div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);