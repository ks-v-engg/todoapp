import React from "react";
import { useNavigate } from "react-router-dom";
import { Routetodo } from "./Route";
import axios from 'axios';
import { Row, Table,Col, Button } from "react-bootstrap";

const Todolist = () => {

    // const formatDate = (longDate) => {
    //     const date = new Date(longDate);
    //     const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(date);
    //     return formattedDate;
    //   }

    const [data, setData] = React.useState([]);

    const addnavi =  useNavigate();

    const btnedit = (id) => {
        addnavi('/todoedit/' + id);

    }
    
    const getdata = () => {
        axios.get('https://6641cd993d66a67b3434fc30.mockapi.io/todo')
        .then((response) => {
            // handle success
            setData(response.data);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });

    }

    const updatestatus = (id,status,completed_on) => {
        axios.put('https://6641cd993d66a67b3434fc30.mockapi.io/todo/' + id,
            {
               "is_completed" : status,
                "modified_on" : new Date(),
                "completed_on" : completed_on
            }
        )
        .then(() => {
            // handle success
            if (status) {
                alert('Item marked as completed');
            } else {
                alert('Item marked as not completed');
            }
            getdata();
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    }

    React.useEffect(() => {
        getdata();
    }, []);


   

    const showadd = () => {
        addnavi(Routetodo.todoadd)
        }

    const logout = () => {
            addnavi(Routetodo.login)
        }
    const btndelete = (id) => {
        if (window.confirm("Are you sure you want to delete?") ) { 
            axios.delete('https://6641cd993d66a67b3434fc30.mockapi.io/todo/' + id)
            .then(() => {
                // handle success
            alert("Deleted sucessfully");
            })
            .catch((error) => {
                // handle error
                alert("Unable to delete");
                console.log(error);
            })
            .finally(() => {
                getdata();
            });
        }
    }
    
return <div> 
<Row> 
    <Col xs={10}><h2> To do list</h2></Col> 
    <Col><Button style={{marginTop : "5px", width : "100px"}} onClick={showadd}>Add Item</Button>  </Col>
    <Col><Button style={{marginTop : "5px"}} onClick={logout}>Log out</Button> </Col>
</Row>

<Table striped bordered hover>
    <thead>
        <tr>
            <th>SL #</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Completed on</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Actions</th>

        </tr>
           
    </thead>
    <tbody>

    {data.map((todo) => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.due_date}</td>
                        <td>{todo.is_completed ? "Yes" : "No"}</td>
                        <td>{todo.completed_on}</td>
                        <td>{todo.created_on}</td>
                        <td>{todo.modified_on}</td>
                        <td> {todo.is_completed? 
                                <Button style={{marginRight : "2px"}} disabled>Edit</Button>: 
                                <Button style={{marginRight : "2px"}} onClick={ () => btnedit(todo.id)}>Edit</Button> } 
                            <Button style={{marginRight : "2px"}} 
                                onClick={ () => btndelete(todo.id)}>Delete</Button>
                            <Button  onClick={ () => updatestatus(todo.id,true,new Date())} 
                                style={{marginRight : "2px"}}>Mark as completed</Button>
                            <Button  onClick={ () => updatestatus(todo.id,false,null)}>Undo</Button>
                        </td>
                    </tr>
                })}
    </tbody>
</Table> <br />
</div>
}
export default Todolist;