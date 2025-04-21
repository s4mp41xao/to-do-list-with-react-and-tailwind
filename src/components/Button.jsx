function Button(props) {
  return (
    <button {...props} className="p-2 rounded-md">
      {props.children}
    </button>
  )
}

export default Button
