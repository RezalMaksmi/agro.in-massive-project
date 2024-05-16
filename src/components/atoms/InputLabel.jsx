import React from 'react'

const InputLabel = (props) => {
  return (
      <>
      	<label htmlFor={props.htmlFor} className='text-sm font-semibold text-[#8D9E9B] mt-5'>{props.children}</label>
      	<input type={props.type} name='email' id={props.id} className='focus:outline-none border-b-2 border-[#8D9E9B]'/>
      </>
  )
}

export default InputLabel;
