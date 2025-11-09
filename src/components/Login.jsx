import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPasswors, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email:'',
    password:''
  });

  const emailIsInvalid = enteredValues.email !== "" &&  !enteredValues.email.includes("@")

  function handleSubmit(event) {
    event.preventDefault();

    console.log("jjj", enteredValues.email);
  }

  function handleInputChange(identifier,value){
    setEnteredValues(prevValue=>({
      ...prevValue,
      [identifier]:value
    }))
  }

  // function handleEmailChange(event){
  //   setEnteredValues((prev)=>({
  //     ...prev,
  //     email : event.target.value
  //   }))

  // }
  // function handlePasswordChange(event){
  //   setEnteredValues((prev)=> ({...prev,password: event.target.value}))

  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => {
              handleInputChange("email", event.target.value);
            }}
            value={enteredValues.email}
          />
        </div>
        <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
