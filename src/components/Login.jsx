import { useState } from "react";
import useInput from "../hooks/useInput";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPasswors, setEnteredPassword] = useState('');
  // const [enteredValues, setEnteredValues] = useState({
  //   email:'',
  //   password:''
  // });

  // const [didEdit,setDidEdit]=useState({
  //   email:false,
  //   password:false
  // })

  const {
    value: enteredValues,
    handleInputBlur,
    handleInputChange,
  } = useInput("");
  let emailIsInvalid;
  if (enteredValues !== "") {
    emailIsInvalid = !enteredValues.includes("@");
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("jjj", enteredValues);
  }

  // function handleInputChange(identifier,value){
  //   setEnteredValues(prevValue=>({
  //     ...prevValue,
  //     [identifier]:value
  //   }))
  //    setDidEdit((pervEdite) => ({
  //      ...pervEdite,
  //      [identifier]: false,
  //    }));
  // }

  // function handleInputBlur(identifier){
  //   setDidEdit(pervEdite => ({
  //     ...pervEdite,
  //     [identifier]:true
  //   }))

  // }

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
            onChange={handleInputChange}
            value={enteredValues.email}
            onBlur={() => handleInputBlur()}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={enteredValues.password}
            onBlur={() => handleInputBlur()}
          />
        </div>
        {/* <div className="control-error">
          {passwordIsInvalid && <p>Please enter a password.</p>}
        </div> */}
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
