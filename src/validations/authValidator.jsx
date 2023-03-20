const registrationValidation = (name,password)=>{
    const errorMessage = {};
    if (name.length < 3 || name.length > 30) {
      errorMessage.name = "Name Must be between 3 to 30 characters";
    }
    if (password.length < 6 || password.length > 15) {
      errorMessage.password = "Password Must be between 6 to 15 characters";
    }
    return errorMessage;
}

export {
    registrationValidation
}