import *as yup from 'yup';


const validation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
   
})


export default validation;