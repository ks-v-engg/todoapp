import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { Routetodo } from './Route';
import Todolist from './Todolist';
import Todoadd from './todoadd';
import Todoedit from './todoedit';

const objrouter = createBrowserRouter([
  {
    path : Routetodo.login,
    element :  <Login />
  },
  {
    path : "/",
    element :  <Login />
  },
  {
    path : Routetodo.todolist,
    element :  <Todolist />
  },
  {
    path : Routetodo.todoadd,
    element :  <Todoadd />
  }, {
    path : Routetodo.todoedit,
    element :  <Todoedit />
  }
]);


function App() {
  return <RouterProvider router={objrouter} />
}

export default App;
