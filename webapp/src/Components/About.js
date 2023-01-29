import React from "react";
import bg from "../images/bg.jpg";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h2>About us</h2>
      <br></br>
      <div style={{ width: "1300px" }} className="center-div">
        <div className="row">
          <div className="col-6">
            <p className="  ">
            Bangalore Institute of Technology (BIT) is a well-known engineering college located in Bangalore, India. It was established in the year 1979 and is affiliated with Visvesvaraya Technological University (VTU) and approved by the All India Council for Technical Education (AICTE). The college offers undergraduate, postgraduate, and doctoral programs in engineering and technology.
              <br></br>
              <br></br>
              BIT has a wide range of departments including Computer Science and Engineering, Electronics and Communication Engineering, Information Science and Engineering, Mechanical Engineering, Industrial Engineering and Management, and Applied Sciences and Humanities. The Institute has well-equipped labs and workshops to support the practical aspects of the curriculum. It also has a library with a vast collection of books and journals, and a computer center with internet facilities.
              <br></br>
              <br></br>
              BIT has a strong reputation for its academic programs and has consistently been ranked among the top engineering colleges in Bangalore. The Institute has a strong emphasis on research and development, and many of its faculty members are actively involved in research projects in various fields of engineering and technology.

The college has a dedicated placement cell that provides guidance and support to students in finding employment opportunities upon graduation. BIT has a good track record of successful placements, with many of its students finding employment at top companies.
            </p>
          </div>
          <div className="align-self-end col-6">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
