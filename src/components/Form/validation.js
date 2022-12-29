import *as yup from 'yup';


const validation2 = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required(),
    gender:yup.string().required()
})


export default validation2;