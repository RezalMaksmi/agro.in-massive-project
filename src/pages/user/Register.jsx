import React from 'react'
// import Login from './../../pages/user/Login';
import bgHero from './../../assets/bgHeroLogin.png';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Card from './../../components/atoms/CardForm';
import InputLabel from './../../components/atoms/InputLabel';


const Register = () => {
	const goToLandingPage = () => {
    navigate('/');
  };
	const navigate = useNavigate();
  return (
    <div className='min-h-screen relative' style={{backgroundImage: `URL(${bgHero})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
				<button
          onClick={goToLandingPage}
          className='relative top-[90px] left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full w-max flex flex-row justify-center items-center gap-3'
        >
          <IoIosArrowBack />Kembali
        </button>
        <Card account="Sudah punya akun?" direct="Masuk disini" opsi="Daftar" className="h-[575px] inset-y-10" text="Daftar" to={'/login'} title={<>Bergabung Bersama<br/>Agro.in</>}>
          <InputLabel type="text" htmlFor="username" id="username">Username</InputLabel>
          <InputLabel type="email" htmlFor="email" id="email">Email</InputLabel>
			    <InputLabel type="password" htmlFor="password" id="password">Password</InputLabel>
        </Card>
		</div>
  )
}

export default Register;