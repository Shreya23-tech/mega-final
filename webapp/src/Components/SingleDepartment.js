import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import departmentLogo from "../images/department-lg.png";
import switchOrder from "../images/switch-order-logo.png";
import vector from "../images/Vector.png";

function SingleDepartment() {
  const [action, setAction] = useState(0);
  const [tag, setTag] = useState("fname");
  const [order, setOrder] = useState("1");
  const [dname, setDname] = useState("");
  const [hod, setHod] = useState({fname: '', email: ''});
  const [noOfCourses, setCourseNo] = useState(0);
  const [noOfFaculties, setFacultyNo] = useState(0);
  const [noOfStudents, setStudentNo] = useState(0);
  const [department, setDepartment] = useState([]);
  const [course, setCourse] = useState([]);
  const [student, setStudent] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const displayCourse = () => {
    setAction(1);
  };

  const displayFaculty = () => {
    setAction(0);
  };

  const displayStudent = () => {
    setAction(2);
  };

  async function getData() {
    try {
      const department = window.location.href.slice(33);
      const doc = await fetch(`/api/department/get/${department}/data`);
      const { dname, fname, email, noOfCourses, noOfStudents, noOfFaculties } = await doc.json();
      setDname(dname);
      setHod({fname, email});
      setCourseNo(noOfCourses);
      setFacultyNo(noOfFaculties);
      setStudentNo(noOfStudents);
    } 
    catch (err) {
      console.log(err);
    }
  }

  async function getDepartment() {
    try {
      const dname = window.location.href.slice(33);
      if(action==0) {        
        const doc = await fetch(`/api/department/get/${dname}?tag=${tag}&order=${order}`);
        const department = await doc.json();
        setDepartment(department);
        console.log("1",department)
      }      
      else if(action==1) {
        console.log("1",tag)
        const doc = await fetch(`/api/department/get/${dname}/course?tag=${tag}&order=${order}`);
        const course = await doc.json();
        setCourse(course);
        console.log("2",course)
      }      
      else{
        console.log("1",tag)
        const doc = await fetch(`/api/department/get/${dname}/student?tag=${tag}&order=${order}`);
        const stud = await doc.json();
        setStudent(stud);
        console.log("3",stud)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchVal !== "") {
      const doc = await fetch(
        `/api/department/get/${dname}/course/search?filter=${searchVal}`
      );
      const result = await doc.json();
      setCourse(result);
      console.log("3",result);
    } else {
      const doc = await fetch(`/api/department/get/${dname}/course?tag=${tag}&order=${order}`);
      const result = await doc.json();
      setCourse(result);
      console.log("4",result)
    }
  };
  const handleKeyDown = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") handleSubmit(e);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (order === "1") setOrder("-1");
    else setOrder("1");
  };

  useEffect(() => {
    getData();
    
  }, [noOfCourses, noOfFaculties, noOfStudents]);
  useEffect(() => {
    getDepartment();
  },[tag, order, action]);
  console.log(action)
  return (
    <div>
      <Row>
        <Col className="leftside" md={2}>
          <p>
            <span className="pageimageholder">
              <img style={{ marginTop: "40px" }} src={departmentLogo} alt="" />
            </span>
          </p>
          <p className="page-title">{dname}</p>
          <p>
            No. of teachers: <b>{noOfFaculties}</b> <br></br>
            No. of students: <b>{noOfStudents}</b> <br></br>
            No. of courses: <b>{noOfCourses}</b>
          </p>
        </Col>
        {/* <Col md={1}></Col> */}
        <Col className="rightside" md={8}>
          <Row>
            <Col onClick={() => {
                  displayFaculty()
                  setTag("fname");
                }} md={1}>
              Faculty
            </Col>
            <Col onClick={() => {
                  displayCourse()
                  setTag("course_name");
                }} className="mr-auto" md={1}>
              Courses
            </Col>
            <Col onClick={() => {
                  displayStudent()
                  setTag("first_name");
                }} md={7}>
              Students
            </Col>
          {
            <input
                className="search"
                type="text"
                placeholder="Search"
                value={searchVal}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
          }
            <buttton onClick={handleOrder}>
                <img src={switchOrder} alt=""></img>{" "}
            </buttton>
          </Row>
          <hr></hr>
          {/* FACULTY */}

          {action==0 ? (
            <div id="faculty">
              {/* MAIN */}
              <Row className="homerow justify-content-md-center">                
                <Col md={5} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">Head Of Department</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - {hod.fname}
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Contact: {hod.email}
                  </p>
                </Col>                
              </Row>
              {/* SECOND */}
              <Row className="homerow ">
              { department.length > 0 && department.map((el, id) => (
                <Col md={5} key={id} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">Associate Professor</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - {el.fname}
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Contact: {el.email}
                  </p>
                </Col>
                ))}
              </Row>
            </div>
          ) : action==1?(
            <div id="courses">
              <Row className="homerow justify-content-md-center">
                { course.length > 0 && course.map((el, id) => ( 
                <Col md={5} key={id} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">{el.course_name}</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - {el.fname}
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Credits: {el.credits}
                  </p>
                </Col>
                ))}
              </Row>
            </div>
          ):(
            <div id="student">
              <Row className="homerow justify-content-md-center">
                { student.length > 0 && student.map((el, id) => ( 
                <Col md={5} key={id} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">{el.first_name} {el.last_name}</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - {el.first_name}
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    ID: {el.sapid}
                  </p>
                </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default SingleDepartment;
