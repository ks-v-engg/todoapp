import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routetodo } from "./Route";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Todoadd = () => {
    
    const listnav = useNavigate();

    const [description,setdescription] = useState('');
    const [duedate,setduedate] =useState(new Date());

    const gotolist = () => {
        listnav(Routetodo.todolist);
    }

    const addtask = () => {
        axios.post('https://6641cd993d66a67b3434fc30.mockapi.io/todo',
            {
                "description": description,
                "due_date" : duedate,
                "is_completed" : false,
                "created_on" : new Date(),
                "modified_on" : new Date()
            }
        )
        .then(
            () => {
                alert('Task added sucessfully');
                listnav(Routetodo.todolist);
            }
        )
        .catch(
            () => {
                alert('Unable to add task');
            }
        )
        .finally()
    }

    return <div>
        <h1>Add to do</h1>
        <Form>
            <Form.Group className="mb-3" controlId="addtodo">
                <Form.Label>Task description</Form.Label>
                <Form.Control type="text" placeholder="What is the task"
                onChange={(e) => setdescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="duedate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" rows={3} 
                onChange={(e) => setduedate(e.target.value)}/>
            </Form.Group>
            <Button style={{marginRight : "5px"}} onClick={addtask} variant="primary">Add Task</Button>
            <Button onClick={gotolist} variant="secondary">Back</Button>

        </Form>
    </div>
}

export default Todoadd;