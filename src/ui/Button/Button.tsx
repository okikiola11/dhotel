import IButton from "../../models/button"

const Button: React.FC<IButton> = (props: IButton) => {
  return (
    <button 
      onClick={props.onClick}
      className='bg-indigo text-white py-2 px-6 rounded md:ml-8 bg-indigo-400 duration-500' type='button'>
        {props.children}
    </button>
  )
}

export default Button
