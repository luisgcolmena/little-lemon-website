
function Input({inputType, state, handleChange, handleBlur}) {
  return (
    <div>
      <label htmlFor={inputType}></label>
      <input
        name={inputType}
        type={inputType}
        id={inputType}
        value={state}
        onChange={handleChange}
        onBlur={handleBlur}
        >
      </input>
    </div>
  )
}