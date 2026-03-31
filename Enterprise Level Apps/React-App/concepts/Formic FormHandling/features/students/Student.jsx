import { useFormik } from "formik";
import { useLazyGetAllStudentsQuery, useAddStudentMutation, useDeleteStudentMutation } from '../../services/studentsAPI'
import * as Yup from "yup";
import { useEffect } from "react";

function Student() {

  const [saveStudent] = useAddStudentMutation();
  const [getStudents, { isLoading, data }] = useLazyGetAllStudentsQuery();
  const [ deleteStudent ] = useDeleteStudentMutation();

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  //prepare the form object
  let sform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      tech: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Firstname is required!"),
      age: Yup.number().required("Age should be number only"),
    }),
    onSubmit: () => {
      saveStudent(sform.values);
      getStudents();
    },
  });

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={sform.handleSubmit}>
        <label htmlFor="">Firstname</label><br />
        <input
          type="text"
          name="firstname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        {sform.touched.firstname && <div className="error">{sform.errors.firstname}</div>}
        <br />
        <label htmlFor="">Lastname</label><br />
        <input
          type="text"
          name="lastname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <label htmlFor="">Age</label><br />
        <input
          type="text"
          name="age"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        {sform.touched.age && <div className="error">{sform.errors.age}</div>}
        <br />
        <div className="gender">
          <h3>Select Your Gender</h3>
          <input type="radio" name="gender" value="male" onChange={sform.handleChange} />
          <label htmlFor="male">Male</label>&nbsp;&nbsp;
          <input type="radio" name="gender" value="female" onChange={sform.handleChange} />
          <label htmlFor="female">Female</label>&nbsp;&nbsp;
          <input type="radio" name="gender" value="others" onChange={sform.handleChange} />
          <label htmlFor="others">Others</label>
        </div>
        <div className="techs">
          <h3>Select Your Technologies</h3>
          <input type="checkbox" name="tech" value="HTML/CSS" onChange={sform.handleChange} />
          <label htmlFor="HTML/CSS">HTML/CSS</label>&nbsp;&nbsp;
          <input type="checkbox" name="tech" value="ReactJs" onChange={sform.handleChange} />
          <label htmlFor="ReactJs">ReactJs</label>&nbsp;&nbsp;
          <input type="checkbox" name="tech" value="AngularJs" onChange={sform.handleChange} />
          <label htmlFor="AngularJs">AngularJs</label>
        </div>
        <button type="submit">Register</button>
      </form>

      <div className="students">
        {
          isLoading ?
            "Loading..." :
            data?.map((student) => (
              <div className="student" key={student.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>

                <p><strong>First Name:</strong> {student.firstname}</p>
                <p><strong>Last Name:</strong> {student.lastname}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Gender:</strong> {student.gender || "Not specified"}</p>
                <p><strong>Tech:</strong> {student.tech || "None"}</p>

                <button onClick={() => {
                  deleteStudent(student.id);
                  getStudents();
                  }}>
                  Delete
                </button>

              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Student