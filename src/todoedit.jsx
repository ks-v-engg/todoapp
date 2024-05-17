import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routetodo } from "./Route";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Todoedit = () => {

    const {id} = useParams();
    
    const listnav = useNavigate();

    const [description,setdescription] = useState('');
    const [duedate,setduedate] =useState(new Date());

    
    const gotolist = () => {
        listnav(Routetodo.todolist);
    }

 
    React.useEffect(() => {
        axios.get('https://6641cd993d66a67b3434fc30.mockapi.io/todo/' + id)
        .then((response) => {
            // handle success
            setdescription(response.data.description);
            setduedate(response.data.due_date);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
       
    }, [id]);

    const edittask = () => {
        axios.put('https://6641cd993d66a67b3434fc30.mockapi.io/todo/' + id,
            {
                "description": description,
                "due_date" : duedate,
                "modified_on" : new Date()
            }
        )
        .then(
            () => {
                alert('Task edited sucessfully');
                listnav(Routetodo.todolist);
            }
        )
        .catch(
            () => {
                alert('Unable to edit task');
            }
        )
        .finally()
    }

    return <div>
        <h1>Edit to do</h1>
        <Form>
            <Form.Group className="mb-3" controlId="addtodo">
                <Form.Label>Task description</Form.Label>
                <Form.Control type="text" placeholder="What is the task"
                onChange={(e) => setdescription(e.target.value)} value={description}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="duedate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" rows={3} 
                onChange={(e) => setduedate(e.target.value)}
                value={duedate}/>
            </Form.Group>
            <Button style={{marginRight : "5px"}} onClick={edittask} variant="primary">Update Task</Button>
            <Button onClick={gotolist} variant="secondary">Back</Button>

        </Form>
    </div>
}

export default Todoedit;