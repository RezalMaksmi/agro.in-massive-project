import React from 'react'
import Card from './../../components/atoms/CardForm';
import InputLabel from './../../components/atoms/InputLabel';
import bgHero from './../../assets/bgHeroLogin.png';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Login = () => {
	const navigate = useNavigate;
  const goToLandingPage = () => {
    navigate('/');
  };
  return (
  	<div className='min-h-screen relative' style={{backgroundImage: `URL(${bgHero})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
				<button
          onClick={goToLandingPage}
          className='relative top-[90px] left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full w-max flex flex-row justify-center items-center gap-3'
        >
          <IoIosArrowBack />Kembali
        </button>
        <Card account="Belum punya akun?" direct="Daftar disini" opsi="Masuk" className="h-[490px] inset-y-24" text="Masuk" to={'/register'} title={<>Selamat Datang<br/>Kembali di Agro.in</>}>
          <InputLabel type="email" htmlFor="email" id="email">Email</InputLabel>
			    <InputLabel type="password" htmlFor="password" id="password">Password</InputLabel>
        </Card>
		</div>
  )
}

export default Login;
