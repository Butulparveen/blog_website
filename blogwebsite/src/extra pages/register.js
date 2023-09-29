import React, { useState } from "react";
import "../styles/register.css";
// import Footer from "../components/footer.js";

function Register() {
  const [optionsState, setOptionsState] = useState("A");
  const current = new Date().toISOString().split("T")[0];
  const [values, setValues] = useState({
    gender: "Male" ? "Female" : "Transgender", // Initial gender value
  });
  const [errors, setErrors] = useState({
    gender: "", // Initialize the gender error message as an empty string
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      gender: event.target.value, // Update the gender value when the radio button changes
    });
  };

  const handleSelectChange = (event) => {
    setOptionsState(event.target.value); // Update the selected value when the user makes a selection
  };
  return (
    <div className="login">
      <span className="loginTitle">Register</span>
      <form className="loginForm">
        <label className="loginDesc">Name</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter a name....."
        />
        <label className="loginDesc">Date of birth</label>
        <input
          className="loginInput"
          type="date"
          placeholder="Enter BirthDate"
          // value={values.birthdate} onChange={handleChange}
          name="birthdate"
          max={current}
        />
        <label className="loginDesc">Age</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter a Age....."
        />
        <form>
          <label className="loginDesc">Please Select Gender</label>
          <form>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="Male"
                checked={values.gender === "Male"}
              />
              Male
            </label>
          </form>
          <form>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="Female"
                checked={values.gender === "Female"}
              />
              Female
            </label>
          </form>
          <form>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="Other"
                checked={values.gender === "Other"}
              />
              Other
            </label>
          </form>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </form>

        <select
          className="loginInput"
          value={optionsState}
          onChange={handleSelectChange}
        >
          <option value="A">Male</option>
          <option value="B">Female</option>
          <option value="C">Transgender</option>
        </select>
        <label className="loginDesc">Role</label>
        <select
          className="loginInput"
          value={optionsState}
          onChange={handleSelectChange}
        >
          <option value="A">Admin</option>
          <option value="B">Personal</option>
          <option value="C">Organisational</option>
        </select>

        <label className="loginDesc">Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter a email ...."
        />
        <label className="loginDesc">Password</label>
        <input
          className="loginInput"
          type="passsword"
          placeholder="Enter a password...."
        />
        <div>
          <button className="registerButton">Register</button>
        </div>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;

// import React from 'react'
// import "../styles/register.css";

// function Register() {
//   return (
//     <div className='login'>\
//     <span className='loginTitle'>Register</span>
//     <form className='registerForm'>
//       <label className='loginDesc'>Username</label>
//       <input className='loginInput'type='text' placeholder='enter a name'/>
//       <label className='loginDesc'>Email</label>
//       <input className='loginInput'type='email' placeholder='enter a email'/>
//       <label className='loginDesc'>Password</label>
//       <input className='loginInput'type='password' placeholder='enter a password'/>
//       <button className='registerButton'>Register</button>
//     </form>
//     <button className='registerLoginButton'>Login</button>
//     </div>
//   )
// }

// export default Register
