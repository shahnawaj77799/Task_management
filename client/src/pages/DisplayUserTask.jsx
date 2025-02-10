// import axios from "axios";
// import { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';

// const DisplayUserTask=()=>{
//     const empid = localStorage.getItem("empid");
//     const [mydata, setMydata]= useState([]);
//     const [taskStatus, setTaskStatus] = useState("");

//     const loadData=async()=>{
//         try {
//             let api="https://task-management-q2u3.onrender.com/employee/employeetaskdisplay";
//              const response= await axios.post(api, {empid:empid});
//              setMydata(response.data);
//              console.log(response.data);
//         } catch (error) {
//               console.log(error);
//         }
//     }
//     useEffect(()=>{
//         loadData();
//     }, [])



//     const taskSubmit=async(taskid)=>{
//         try {
//             let api="https://task-management-q2u3.onrender.com/employee/employeetasksubmit";
//              const response= await axios.post(api, {taskid:taskid, taskstatus:taskStatus });
//              alert(response.data);
//              loadData();
//         } catch (error) {
//               console.log(error);
//         }
//     }





//     let sno=0;
//   const ans= mydata.map((key)=>{
//     sno++;
//      return(
//         <>
//           <tr>
//             <td> {sno} </td>
//             <td> {key.tasktitle}</td>
//             <td> {key.taskdescription}</td>
//             <td> {key.completiondays}</td>
//             <td>
//             <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e)=>{setTaskStatus(e.target.value)}}>
//                <option> Select Task</option>
//                <option value="Fully Completed">Fully Completed</option>
//                <option value="Partial Completed">Partial Completed</option>
//                <option value="No Completed">No Completed</option>
//             </Form.Select>
//              </td>
//             <td> 
//              {key.empreport=="submited"?(<Button disabled>submitted</Button>):(<Button onClick={()=>{taskSubmit(key._id)}}>Send</Button>)}  
        
//             </td>
//           </tr>
//         </>
//      )
//   })


//     return(
//         <>
//           <h1> Your Task/Assignmemnt</h1>
//           <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Task Title</th>
//           <th>Description</th>
//           <th>Total Days</th>
//           <th> Status</th>
//           <th> Send Report</th>
//         </tr>
//       </thead>
//       <tbody>
//        {ans}
//       </tbody>
//       </Table>
//         </>
//     )
// }

// export default DisplayUserTask;






import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const DisplayUserTask = () => {
    const empid = localStorage.getItem("empid");
    const [mydata, setMydata] = useState([]);
    const [taskStatus, setTaskStatus] = useState("");

    const loadData = async () => {
        try {
            let api = "https://task-management-q2u3.onrender.com/employee/employeetaskdisplay";
            const response = await axios.post(api, { empid: empid });
            setMydata(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadData();
    }, [])

    const taskSubmit = async (taskid) => {
        try {
            let api = "https://task-management-q2u3.onrender.com/employee/employeetasksubmit";
            const response = await axios.post(api, { taskid: taskid, taskstatus: taskStatus });
            alert(response.data);
            loadData();
        } catch (error) {
            console.log(error);
        }
    }

    let sno = 0;
    const ans = mydata.map((key) => {
        sno++;
        return (
            <tr key={key._id}>
                <td>{sno}</td>
                <td>{key.tasktitle}</td>
                <td>{key.taskdescription}</td>
                <td>{key.completiondays}</td>
                <td>
                    <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e) => { setTaskStatus(e.target.value) }}>
                        <option>Select Task</option>
                        <option value="Fully Completed">Fully Completed</option>
                        <option value="Partial Completed">Partial Completed</option>
                        <option value="No Completed">No Completed</option>
                    </Form.Select>
                </td>
                <td>
                    {key.empreport === "submited" ? (<Button disabled>submitted</Button>) : (<Button onClick={() => { taskSubmit(key._id) }}>Send</Button>)}
                </td>
            </tr>
        )
    })

    return (
        <>
            <h1 className="text-center my-4">Your Task/Assignment</h1>
            <div className="table-responsive">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Title</th>
                            <th>Description</th>
                            <th>Total Days</th>
                            <th>Status</th>
                            <th>Send Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </Table>
            </div>

            {/* Inline CSS Styling */}
            <style>{`
                .table-responsive {
                    margin-top: 20px;
                }

                .table {
                    font-size: 1rem;
                }

                .table th, .table td {
                    text-align: center;
                    vertical-align: middle;
                }

                .table td {
                    padding: 12px;
                }

                button {
                    padding: 8px 16px;
                    font-size: 1rem;
                }

                @media (max-width: 768px) {
                    .table {
                        font-size: 0.9rem;
                    }

                    .table td, .table th {
                        padding: 8px;
                    }

                    h1 {
                        font-size: 1.6rem;
                    }

                    button {
                        font-size: 0.9rem;
                        padding: 6px 12px;
                    }
                }

                @media (max-width: 576px) {
                    .table th, .table td {
                        padding: 6px;
                    }

                    .table-responsive {
                        margin-top: 15px;
                    }

                    h1 {
                        font-size: 1.4rem;
                    }

                    button {
                        font-size: 0.8rem;
                        padding: 5px 10px;
                    }
                }
            `}</style>
        </>
    )
}

export default DisplayUserTask;
