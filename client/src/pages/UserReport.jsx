
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// import rightimg from "../images/right.jpeg";
// import wrongimg from "../images/wrong.jpeg";
// import Button from 'react-bootstrap/Button';
// import { message } from "antd";
// const UserReport=()=>{
//     const [mydata, setMydata]= useState([]);

//      const loadData=async()=>{
//         let api="http://localhost:8080/admin/showreport";
//         try {
//               const response = await axios.get(api);
//               setMydata(response.data);
//               console.log(response.data);
//         } catch (error) {
//              console.log(error);
//         }
//      }

//  useEffect(()=>{
//     loadData();
//  }, [])


//  const reassignTask=async(taskid)=>{
//     let api="http://localhost:8080/admin/taskreassing";
//     try {
//         const response = await axios.post(api, {taskid:taskid});
//        message.success(response.data.msg);
//        loadData();
//   } catch (error) {
//        console.log(error);
//   }
//  }

// let sno=0;
// const ans=mydata.map((key)=>{
//     sno++;
//     return(
//         <>

//           <tr>
//             <td>
           
//            {key.empreport=="submited"?(
//             <img src={rightimg} width="40" height="40" />
//             ):(
//             <img src={wrongimg} width="40" height="40"/>
//             )}

//             </td>
//             <td> {sno}</td>
//             <td> {key.empid.empname} </td>
//             <td> {key.empid.designation} </td>
//             <td> {key.empid.email} </td>
//             <td> {key.tasktitle} </td>
//             <td> {key.taskdescription} </td>
//             <td> {key.completiondays} </td>
//             <td> {key.taskstatus} </td>
//             <td>
//                  {key.empreport=="submited"?(
//                     <>
//                       <span style={{color:"green", fontWeight:"bold"}}>{key.empreport} </span>
//                     </>
//                  ):(
//                     <>
//                       <span style={{color:"red", fontWeight:"bold"}}>{key.empreport} </span>
//                     </>
//                  )} </td>

//                  <td>

//                  <Button variant="primary" size="sm"
//                   onClick={()=>{reassignTask(key._id)}}
//                  style={{fontSize:"10px"}}>ReAssing</Button>
//                  </td>
//           </tr>
//         </>
//     )
// })



//     return(
//         <>
//            <h1> Show User Report</h1>  
//     <Table striped bordered hover style={{fontSize:'12px'}}>
//       <thead>
//         <tr>
//             <th> </th>
//           <th>#</th>
//           <th>Employee Name</th>
//           <th>Designation</th>
//           <th>Email</th>
//           <th>Task Title</th>
//           <th>Task Description</th>
//           <th>Assign Days</th>
//           <th> Task Status</th>
//           <th> Report </th>
//           <th>  </th>
//         </tr>
//       </thead>
//       <tbody>
//       {ans}  
//         </tbody>     
//         </Table>
//         </>
//     )
// }

// export default UserReport;





import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { message } from "antd";
import rightimg from "../images/right.jpeg";
import wrongimg from "../images/wrong.jpeg";

const UserReport = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8080/admin/showreport";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  const reassignTask = async (taskid) => {
    let api = "http://localhost:8080/admin/taskreassing";
    try {
      const response = await axios.post(api, { taskid: taskid });
      message.success(response.data.msg);
      loadData();
    } catch (error) {
      console.log(error);
    }
  }

  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={key._id}>
        <Card className="task-card shadow-sm">
          <Card.Body>
            <Card.Title className="task-title">{key.tasktitle}</Card.Title>
            <Card.Text className="task-text">
              <strong>Employee Name: </strong>{key.empid.empname} <br />
              <strong>Designation: </strong>{key.empid.designation} <br />
              <strong>Email: </strong>{key.empid.email} <br />
              <strong>Task Description: </strong>{key.taskdescription} <br />
              <strong>Completion Days: </strong>{key.completiondays} <br />
              <strong>Status: </strong>{key.taskstatus} <br />
              <strong>Report: </strong>
              {key.empreport === "submited" ? (
                <span className="status completed">{key.empreport}</span>
              ) : (
                <span className="status pending">{key.empreport}</span>
              )}
            </Card.Text>
            <Button
              variant="warning"
              size="lg"
              onClick={() => reassignTask(key._id)}
              className="reassign-btn"
            >
              Re - Assign
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted footer">
            {key.empreport === "submited" ? (
              <img src={rightimg} width="50" height="50" alt="right" />
            ) : (
              <img src={wrongimg} width="50" height="50" alt="wrong" />
            )}
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <style>
        {`
          .task-card {
            border-radius: 12px;
            padding: 25px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .task-card:hover {
            transform: translateY(-8px);
            box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
          }

          .task-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #343a40;
          }

          .task-text {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #495057;
          }

          .status {
            font-weight: bold;
            padding: 5px 8px;
            border-radius: 5px;
          }

          .completed {
            color: white;
            background-color: #28a745;
          }

          .pending {
            color: white;
            background-color: #dc3545;
          }

          .reassign-btn {
            font-size: 16px;
            font-weight: bold;
            padding: 12px 20px;
            border-radius: 25px;
            width: 100%;
            transition: background-color 0.3s ease;
          }

          .reassign-btn:hover {
            background-color: #e0a800;
            color: white;
          }

          .footer {
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            border-top: none;
            padding: 10px;
          }

          .card-footer img {
            transition: transform 0.3s ease;
          }

          .card-footer img:hover {
            transform: scale(1.1);
          }

          .container {
            margin-top: 40px;
          }

          h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2.5rem;
            color: #343a40;
            font-weight: 700;
          }

          .card-body {
            padding: 20px;
          }

          .card-text {
            font-size: 1.1rem;
            margin-bottom: 20px;
          }

          @media (max-width: 767px) {
            .task-title {
              font-size: 1.3rem;
            }

            .task-text {
              font-size: 1rem;
            }

            .reassign-btn {
              font-size: 14px;
              padding: 10px 15px;
            }

            .footer img {
              width: 40px;
              height: 40px;
            }
          }
        `}
      </style>

      <div className="container">
        <h1>Show User Report</h1>
        <div className="row">
          {ans}
        </div>
      </div>
    </>
  );
}

export default UserReport;
