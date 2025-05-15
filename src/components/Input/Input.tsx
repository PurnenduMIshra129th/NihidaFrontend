interface IInputProps{
  placeholder?:string
  className?:string
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function Input(props:IInputProps) {
  const {placeholder ='',className=''}=props
  return (
    <>
      <div className="">
        {/* <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label> */}
        <input type="text" id="default-input" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 outline-none focus:ring-0 ${className}`}
        placeholder={placeholder}/>
      </div>
    </>
  )
}

export default Input