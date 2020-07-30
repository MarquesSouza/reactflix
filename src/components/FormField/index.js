import React from "react";
import PropTypes from "prop-types";
function FormField({label,name,type,value,onChange}){
    const fieldId = `id_${name}`;
    return(
        <div>
            <label
                htmlFor={fieldId}
            >
                {label}:
                <input 
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
                </label>
        </div>
    )
}
FormField.defaultProps={
    type:"text",
}
FormField.propTypes={
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
   // value:,
   // onChange:,
}
export default FormField;