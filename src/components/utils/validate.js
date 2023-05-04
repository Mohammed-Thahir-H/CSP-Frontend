export default function validate(values){
    let errors= {};

    if (!values.username.trim()){
        errors.username = "Username required"
    }
    if (!values.email.trim()){
        errors.email = "Email required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Email address is invalid"
    }
    if(!values.phoneNo){
        errors.phoneNo="phone Number is required";
    }
    else if(!/^[0-9]{10}$/.test(values.phoneNo)){
        errors.phoneNo = "Should have only 10 digit numericals"
    }
    return errors
}
