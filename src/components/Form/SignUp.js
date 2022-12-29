import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validation';
import { useHistory } from "react-router-dom";

function SignUp() {
  const { handleChange, handleSubmit, handleReset, handleBlur, values, touched, errors } = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      gender: ''
    },
    onSubmit: values => {
      console.log(values);
      handleReset();
      handleClick()
      alert(' Registration Successful')
    },
    validationSchema,
  });

  let history = useHistory();
  function handleClick() {
    history.push("/login");
  }


  return (
    <form onSubmit={handleSubmit} id='signUpDiv'>

      <label htmlFor="firstName">First name</label>
      <input
        placeholder='Please enter a username.'
        type="text"
        id='firstName'
        name='firstName'
        onChange={handleChange}
        value={values.firstName}
        onBlur={handleBlur}
      />

      {errors.firstName && touched.firstName && <div id='errorsDiv'> {errors.firstName} </div>}

      <label htmlFor="email">Email</label>
      <input
        placeholder='Please enter an email name.'
        type="email"
        id='email'
        name='email'
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
      />

      {errors.email && touched.email && <div id='errorsDiv'> {errors.email} </div>}


      <label htmlFor="password">Password</label>
      <input
        placeholder='Please enter a password.'
        type="password"
        id='password'
        name='password'
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
      />

      {errors.password && touched.password && <div id='errorsDiv'> {errors.password} </div>}

      <label htmlFor="passwordConfirm">Password confirm</label>
      <input
        placeholder='Please re-enter your password.'
        type="password"
        id='passwordConfirm'
        name='passwordConfirm'
        onChange={handleChange}
        value={values.passwordConfirm}
        onBlur={handleBlur}
      />

      {errors.passwordConfirm && touched.passwordConfirm && <div id='errorsDiv'> {errors.passwordConfirm} </div>}

      <div id='genderDiv'>
        <span>Male</span>
        <input
          type="radio"
          name='gender'
          value='male'
          checked={values.gender === 'male'}
          onChange={handleChange}
          onBlur={handleBlur} />

        {errors.gender && touched.gender && <div id='errorsDiv'> {errors.gender} </div>}

        <span>Female</span>
        <input
          type="radio"
          name='gender'
          value='female'
          checked={values.gender === 'female'}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.gender && touched.gender && <div id='errorsDiv'> {errors.gender} </div>}

      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default SignUp
