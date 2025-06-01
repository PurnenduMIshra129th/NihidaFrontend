import { IInputProps } from "../../types/input/input.types"

// eslint-disable-next-line @typescript-eslint/naming-convention
function Input(props:IInputProps) {
  const {placeholder ='',className='',label,id = 'defaultID',type = 'text'}=props
  return (
    <>
      <div className="">  
        {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
        <input type={type} id={id} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 outline-none focus:ring-0 ${className}`}
        placeholder={placeholder}/>
      </div>
    </>
  )
}

export default Input