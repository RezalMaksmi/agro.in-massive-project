import React from 'react'
import Logo from './../../assets/logo/logo-txt-hijau.png'
// import InputLabel from './../atoms/InputLabel';
import Button from './../atoms/Button';
import Goggle from './../../assets/logo/google.png'
import { Link } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr';
import InputLabel from './../atoms/InputLabel';


// const InputLabel = (props) => {
//   return (
//     <form className='flex flex-col border-b-2 border-[#8D9E9B] items-start w-3/4 gap-y-3'>
//       	<label htmlFor={props.htmlFor} className='text-sm font-semibold text-[#8D9E9B] mt-5'>{props.children}</label>
//       	<input type={props.type} name='email' id={props.id} className='focus:outline-none focus:ring-0'/>
//     </form>
//   )
// }

const CardForm = (props) => {
	
  return (
    <div className={`bg-white w-[330px] ${props.className} rounded-3xl absolute right-[20%] py-8 flex flex-col items-center`}>
			<img src={Logo} alt="" />
			<h1 className='text-2xl font-semibold text-center mt-2'>{props.title}</h1>
			<form className='flex flex-col items-start w-3/4 gap-y-3'>
				{props.children}
				<div className='mt-4 flex gap-x-10'>
					<div className='flex w-full'>
						<input type="checkbox" />
						<p className='text-sm pt-[9px] font-semibold text-[#8D9E9B]'>Remember Me</p>
					</div>
					<Button type="PrimaryButton" text={props.text} className="w-28 h-10"/>
				</div>
			</form>
			<button type='submit' className='hover:bg-primary border-2 border-gray-400 text-sm rounded-full flex items-center gap-x-2 py-1 mt-4 px-4'><GrGoogle />{props.opsi} Dengan Google</button>
			<p className="text-xs font-semibold text-[#8D9E9B] my-2">{props.account}</p>
			<Link to={props.to} className="font-semibold text-[#8D9E9B]">{props.direct}</Link>
    </div>
  )
}

export default CardForm;
