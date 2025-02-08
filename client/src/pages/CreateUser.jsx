// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import axios from 'axios';
// import {message} from "antd";
// const CreateUser=()=>{
//     const [input, setInput] = useState({});    
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values, [name]:value}));
//         console.log(input);
//     }

//     const handleSubmit=async(e)=>{
//       e.preventDefault();
//      let api="http://localhost:8080/admin/usercreate";
//      try {
//          const response= await axios.post(api, input);
//          console.log(response.data);
//          message.success("User succesfully created!!");
        
//      } catch (error) {
//          console.log(error)
//      }

//     }

//     return(
//         <>
//           <h1> Create New User</h1>
//           <Form style={{width:"400px"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Emoloyee Name: </Form.Label>
//         <Form.Control type="text" name="username" onChange={handleInput}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail" >
//         <Form.Label>Select Designation: </Form.Label>
//         <Form.Select aria-label="Default select example" name="designation" onChange={handleInput}>
//       <option>select Designation</option>
//       <option value="Designer">Designer</option>
//       <option value="Programmer">Programmer</option>
//       <option value="DataBase Designer">DataBase Designer</option>
//       <option value="Analyst">Anylist</option>
//       <option value="Team Leader">Team Leader</option>
//       <option value="Project Manager">Project Manager</option>
//         </Form.Select>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email"  name="email" onChange={handleInput} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//         </>
//     )
// }

// export default CreateUser;






import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from "antd";

const CreateUser = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "https://task-management-q2u3.onrender.com/admin/usercreate";
    try {
      const response = await axios.post(api, input);
      console.log(response.data);
      message.success("User successfully created!!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="form-container">
        <h1 className="text-center mb-4">Create New User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label-box">Employee Name: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleInput}
              placeholder="Enter employee name"
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label-box">Select Designation: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="designation"
              onChange={handleInput}
              className="custom-input"
            >
              <option>select Designation</option>
              <option value="Designer">Designer</option>
              <option value="Programmer">Programmer</option>
              <option value="DataBase Designer">DataBase Designer</option>
              <option value="Analyst">Analyst</option>
              <option value="Team Leader">Team Leader</option>
              <option value="Project Manager">Project Manager</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="label-box">Email: </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Enter email"
              className="custom-input"
            />
          </Form.Group>

          <Button variant="success" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>

      {/* Inline CSS Styling */}
      <style>{`
        .form-container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 450px;
          margin: 50px auto; /* Center the form on the page */
        }

        .custom-input {
          border-radius: 8px;
          border: 1px solid #ddd;
          padding: 10px;
          font-size: 1rem;
        }

        .custom-input:focus {
          border-color: #28a745;
          box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
        }

        .submit-btn {
          font-size: 1.1rem;
          padding: 12px 20px;
          width: 100%;
          background-color: #28a745;
          border: none;
          border-radius: 8px;
        }

        .submit-btn:hover {
          background-color: #218838;
          box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
        }

        h1 {
          color: #333;
          font-size: 2rem;
          font-weight: bold;
          margin-top: 30px;
        }

        .mb-3 label {
          font-weight: bold;
          color: #fff;
          background-color: #28a745;
          padding: 5px 10px;
          border-radius: 5px;
          display: inline-block;
          margin-bottom: 5px;
          font-size: 1rem;
        }

        .mb-3 label:hover {
          background-color: #218838;
        }

        @media (max-width: 576px) {
          .form-container {
            width: 100%;
            padding: 20px;
          }

          h1 {
            font-size: 1.6rem;
          }

          .submit-btn {
            padding: 10px 15px;
          }

          .mb-3 label {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default CreateUser;


