
const Button = ({text , className}) => {
  return (
    <>
      <button className={`cursor-pointer ${className}`}>
        {text}
      </button>
    </>
  )
}

export default Button