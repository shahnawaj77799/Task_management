// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// const AssignTask=()=>{
//     const [mydata, setMydata]= useState([]);      
//     const [show, setShow] = useState(false);
//     const [input, setInput]= useState({});
//     const [empId, setEmpId]=useState("");
//   const handleClose = () => setShow(false);
//   const handleShow = (empid) =>{
//     setEmpId(empid);
//     setShow(true);
//   } 
//   const handleInput=(e)=>{
//    let name=e.target.name;
//    let value= e.target.value; 
//    setInput(values=>({...values, [name]:value}));
//    console.log(input);
//   }


//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/admin/assigntask";

//     try {
//          const response = await axios.post(api, {empid:empId, ...input});
//          alert("task assign")
//     } catch (error) {
//         console.log(error);
//     }
    
//   }

//     const loadData=async()=>{
//         let api="http://localhost:8080/admin/assigntaskdisplay";
//         try {
//             const response= await axios.get(api);
//             setMydata(response.data);
//             console.log(response.data);    
//         } catch (error) {
//              console.log(error);
//         }
//     }
//      useEffect(()=>{
//         loadData();
//      }, []);


//      const ans= mydata.map((key)=>{
//            return(
//             <>
//               <tr>
//                  <td> {key.empname} </td>
//                  <td> {key.designation} </td>
//                  <td> {key.email} </td> 
//                  <td>
               
//   <Button variant="success" onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
                    
//                   </td>  
//               </tr>
//             </>
//            )
//      })


//     return(
//         <>
//             <h1> Assign Task To User</h1> 
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Emp Name</th>
//           <th>Designation</th>
//           <th>Email</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//      </Table>   


//      <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Task To Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Enter Task Title : <input type="text" name="tasktitle" value={input.tasktitle}
//           onChange={handleInput} />
//           <br/>
//           Enter Description : 
//           <br/>
//           <textarea rows="4" cols="50" name="taskdescription" 
//           value={input.taskdescription}
//           onChange={handleInput} />
         
//           <br/>

//           Enter Completion Days : 
//           <br/>
//           <input type="number" name="compdays" value={input.compdays}
//           onChange={handleInput} />

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={handleSubmit}>
//            Save!!!
//           </Button>
//         </Modal.Footer>
//       </Modal>   
//         </>
//     )
// }
// export default AssignTask;






// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Button, Modal, Form } from 'react-bootstrap';

// const AssignTask = () => {
//   const [mydata, setMydata] = useState([]);
//   const [show, setShow] = useState(false);
//   const [input, setInput] = useState({});
//   const [empId, setEmpId] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = (empid) => {
//     setEmpId(empid);
//     setShow(true);
//   };

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     let api = "http://localhost:8080/admin/assigntask";

//     try {
//       await axios.post(api, { empid: empId, ...input });
//       alert("Task assigned successfully!");
//       setShow(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const loadData = async () => {
//     let api = "http://localhost:8080/admin/assigntaskdisplay";
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const ans = mydata.map((key) => (
//     <tr key={key._id}>
//       <td>{key.empname}</td>
//       <td>{key.designation}</td>
//       <td>{key.email}</td>
//       <td>
//         <Button variant="success" onClick={() => handleShow(key._id)}>
//           Assign Task
//         </Button>
//       </td>
//     </tr>
//   ));

//   return (
//     <>
//       <h1 className="mb-4">Assign Task To User</h1>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Emp Name</th>
//             <th>Designation</th>
//             <th>Email</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </Table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Task To Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="tasktitle">
//               <Form.Label>Enter Task Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="tasktitle"
//                 value={input.tasktitle || ""}
//                 onChange={handleInput}
//                 placeholder="Task Title"
//               />
//             </Form.Group>

//             <Form.Group controlId="taskdescription">
//               <Form.Label>Enter Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 name="taskdescription"
//                 value={input.taskdescription || ""}
//                 onChange={handleInput}
//                 placeholder="Task Description"
//               />
//             </Form.Group>

//             <Form.Group controlId="compdays">
//               <Form.Label>Enter Completion Days</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="compdays"
//                 value={input.compdays || ""}
//                 onChange={handleInput}
//                 placeholder="Completion Days"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Task
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default AssignTask;




import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const [empId, setEmpId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (empid) => {
    setEmpId(empid);
    setShow(true);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    let api = "https://task-management-q2u3.onrender.com/admin/assigntask";
    try {
      await axios.post(api, { empid: empId, ...input });
      alert("Task assigned successfully!");
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loadData = async () => {
    let api = "https://task-management-q2u3.onrender.com/admin/assigntaskdisplay";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => (
    <Col lg={4} md={6} sm={12} key={key._id}>
      <Card className="task-card mb-4 shadow-lg">
        <Card.Body>
          <Card.Title>{key.empname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{key.designation}</Card.Subtitle>
          <Card.Text>{key.email}</Card.Text>
          <Button variant="success" onClick={() => handleShow(key._id)} size="lg">
            Assign Task
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      <h1 className="mb-4 text-center">Assign Task To User</h1>
      <Row className="justify-content-center">
        {ans}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task To Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="tasktitle">
              <Form.Label>Enter Task Title</Form.Label>
              <Form.Control
                type="text"
                name="tasktitle"
                value={input.tasktitle || ""}
                onChange={handleInput}
                placeholder="Task Title"
              />
            </Form.Group>

            <Form.Group controlId="taskdescription">
              <Form.Label>Enter Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="taskdescription"
                value={input.taskdescription || ""}
                onChange={handleInput}
                placeholder="Task Description"
              />
            </Form.Group>

            <Form.Group controlId="compdays">
              <Form.Label>Enter Completion Days</Form.Label>
              <Form.Control
                type="number"
                name="compdays"
                value={input.compdays || ""}
                onChange={handleInput}
                placeholder="Completion Days"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Task
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Inline CSS Styling */}
      <style>{`
        .task-card {
          border-radius: 10px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .task-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
        }

        .card-body {
          padding: 20px;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
        }

        .card-subtitle {
          font-size: 1.1rem;
          color: #555;
        }

        .card-text {
          font-size: 1rem;
          color: #666;
        }

        button {
          font-size: 1.1rem;
          padding: 12px 25px;
          border-radius: 5px;
        }

        button:hover {
          background-color: #28a745;
          color: white;
        }

        @media (max-width: 767px) {
          .task-card {
            margin-bottom: 20px;
          }

          .card-body {
            padding: 15px;
          }

          .card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default AssignTask;
