import React, { useState } from 'react'

const useForm= (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phoneNo: "",
  });

  const [errors,setErrors] = useState({})

  const handleChange = (e) => {
    const { name,value } = e.target

    setValues((pervValues) => {
        return {
            ...pervValues,
            [name]: value,
        }
        
    })
}
console.log(values)
const handleSubmit = (event) =>{
  event.preventDefault()

  setErrors(validate(values))
}

return {handleChange,values,handleSubmit,errors}
}
export default useForm
