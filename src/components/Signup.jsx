import { useState } from "react";
import Input from "./Input";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordAreNotEqule] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    //    const enteredEmail = fd.get("email")
    //    const enteredPassword = fd.get("password") or for all the values
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
    if (data.password !== data["confirm-password"]) {
      setPasswordAreNotEqule(true);
      return;
    }

    console.log("data", data);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <Input label="Email" type="email" name="email" id="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <Input
            label="Confirm Password"
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={6}
          />
        </div>
      </div>
      {passwordsAreNotEqual && <p>not Match password</p>}

      <hr />

      <div className="control-row">
        <div className="control">
          <Input
            label="First Name"
            type="text"
            id="first-name"
            name="first-name"
            required
          />
        </div>

        <div className="control">
          <Input
            label="Last Name"
            type="text"
            id="last-name"
            name="last-name"
            required
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <Input
            label="Google"
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
        </div>

        <div className="control">
          <Input
            label="Referred by friend"
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
        </div>

        <div className="control">
          <Input
            label="Other"
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
          />
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
