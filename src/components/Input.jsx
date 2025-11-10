import React from "react";

function Input({ label, id, ...props }) {
  return (
    // <div className="control no-margin">
    //   {props.type !== "checkbox" &&<label htmlFor={id}>{label}</label>}
    //   <input id={id} {...props} />
    //   {props.type === "checkbox" && <label htmlFor={id}>{label}</label>}
    // </div>

    
    // this is solution for more flexible
    <label htmlFor={id}>
      {props.type === "checkbox" ? (
        <>
          <input id={id} {...props} /> {label}
        </>
      ) : (
        <>
          {label}
          <input id={id} {...props} />
        </>
      )}
    </label>
  );
}

export default Input;
