function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="rounded-md px-4 py-2 border"
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
