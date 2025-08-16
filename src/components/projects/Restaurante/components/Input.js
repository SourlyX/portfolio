import React from "react"
import '../index.css'

const Input = ({ onChange, type, name, text, checked, className }) => {
  return (
    <div className="input">
      <label>
        <input
          onChange={onChange}
          type={type}
          value={text}
          name={name}
          checked={checked}
          className={className} />
        {text}
      </label>
    </div>
  )
}

export default Input
