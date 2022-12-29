import React from 'react'
import { useFormik } from 'formik';
import { FaFacebook, FaApple } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import { ImTwitter } from "react-icons/im";
import validationSchema from './validation2';



function Login() {
    const { handleChange, handleSubmit, handleReset, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            handleReset()
        },
        validationSchema
    });
    return (
        <form onSubmit={handleSubmit} id='signUpDiv'>


            <label htmlFor="email">Email</label>
            <input
                placeholder='User name'
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
            placeholder='Password'
                type="password"
                id='password'
                name='password'
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}

            />
            {errors.password && touched.password && <div id='errorsDiv'> {errors.password} </div>}

            <button type='submit'>Login</button>

            <footer>
                <p>Join with your favorite socail media account:</p>
                <ul id='footerUl'>

                    <li><FcGoogle size={'35'} /> </li>
                    <li style={{ color: 'blue' }}> <FaFacebook size={'35'} /> </li>
                    <li> <FaApple size={'35'} /> </li>
                    <li style={{ color: 'blue' }}> <ImTwitter size={'35'} /> </li>
                </ul>
            </footer>
        </form>
    )

}

export default Login