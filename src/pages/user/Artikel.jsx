import React from 'react';
import Artikel1 from './../../assets/artikel/artikel1.png';
import Artikel2 from './../../assets/artikel/artikel2.png';
import Artikel3 from './../../assets/artikel/artikel3.jpg';
import Artikel4 from './../../assets/artikel/artikel4.png';
import Artikel6 from './../../assets/artikel/artikel6.png';
import Artikel7 from './../../assets/artikel/artikel7.png';
import Artikel8 from './../../assets/artikel/artikel8.png';
import Artikel9 from './../../assets/artikel/artikel9.png';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import SearchBar from '../../components/atoms/SearchBar';


const DataArtikel = [
	{
		image: Artikel1,title: 'Mentan Ingin Bangun Klaster Pertanian Modern', timestamps: '07 Mei 2024 15:52 WIB', description: 'Kementerian Pertanian (Kementan) berencana untuk membangun klaster pertanian modern. Klaster pertanian modern tersebut mengacu sistem pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan Andi Amran Sulaiman saat mendatangi para petani Bojongemas, Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024). Menurut Amran, demi merealisasikan pertanian modern, pemerintah daerah perlu menyediakan lahan.'
	},
	{
		image: Artikel2, title: 'PJ Bupati Palas Edy Junaedi Salurkan Bantuan Alsintan ke Petani', timestamps: '07 Mei 2024 14:40 WIB', description: 'Pj Bupati Padang Lawas (Palas) Edy Junaedi menyampaikan sejumlah langkah yang akan dilakukan untuk meningkatkan produksi pangan masyarakat. Satu di antaranya, memaksimalkan bantuan dari kementerian berupa alat dan mesin pertanian (Alsintan)'
	},

]

const SampingArtikel = [
		{judulArtikel: `Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah`, timestamps: '2 Mei 2024', image: Artikel3},
		{judulArtikel: `Pemerintah Aceh Gelora Kembali Pasar Tani di 2024`, timestamps: '25 April 2024', image: Artikel4},
		{judulArtikel: `Apakah Makanan Organik Benar-benar Sehat?`, timestamps: '25 April 2024', image: Artikel6},
		{judulArtikel: `Stok Pupuk Bersubsidi Melimpah, Petani Diminta Menebus Kuota ynag Dimiliki`, timestamps: '25 April 2024',image: Artikel7},
		{judulArtikel: `Violet Sun Agro+, Solusi Pertanian Lahan Kering Bertenaga Surya`, timestamps: '25 April 2024', image: Artikel8},
		{judulArtikel: `6 Pengaruh Negatif IPTEK di Bidang Pertanian`, timestamps: '25 April 2024', image: Artikel9},
]

const Line = (props) => {
  // const lineStyle = {
  //   height: '850px',
  //   border: '1px solid #807D7E',
  //   width: '2px',
  // };
  return (
    <div style={props.style}></div>
  );
};

export const MainArtikel = (props) =>{
	const horizStyle = {
		height: '2px',
		width: '470px',
		border: '1px solid #807D7E',
		marginTop: '50px'
	}
	return(
		<div className='grid grid-rows-2 gap-y-16'>
				{DataArtikel.map((news, index) => (
					<div className={`flex flex-col ${props.className} gap-y-2`} key={index}>
						<img src={news.image} alt="" className='w-[470px]'/>
						<p className='text-[12px] text-[#807D7E]'>{news.timestamps}</p>
						<Link to={'/artikeldetail'} className='text-[32px] font-semibold w-[430px]'>{news.title}</Link>
						<p className='w-[430px] text-sm'>{news.description}</p>
						<Line style={horizStyle}/>
					</div>
				))}
				<div>
				</div>
		</div>
	)
}

const ChildArtikel = () =>{
	return(
		<div>
		{SampingArtikel.map((tes, index) => (
			<div className='flex flex-row mx-32 gap-y-2 mb-7' key={index}>
					<img src={tes.image} alt="" className='w-24 rounded-2xl'/>
					<div className='ms-3 w-40 flex flex-col justify-between'>
						<Link className="text-[12px] font-bold" to={'/'}>{tes.judulArtikel}</Link>
						<p className='text-xs font-thin text-[#807D7E]'>{tes.timestamps}</p>
					</div>
			</div>
		))}
		`</div>
	)
}


const Artikel = (props) => {
	const lineStyle = {
    height: '850px',
    border: '1px solid #807D7E',
    width: '2px',
  };

  return (
    <div style={{backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(#e6e6e6,#ffffff)'}}>
    	<div className='pt-48 text-center'>
				<p className='text-[64px] text-green-950 font-bold'>Majalah <span className='text-[#FAB737]'>Agro.in</span></p>
				<p className='text-[16px] mt-4'>Menyajikan Wawasan Terbaru dalam Dunia Pertanian </p>

					{/* <IoIosSearch />
					<input type="text" className='bg-[#D8D8D8] rounded-lg mt-7' style={{height: '35px', width: '320px'}} placeholder='Search'/> */}
					<SearchBar />

			</div>
			<div className='flex pt-48 pb-16'>
				<MainArtikel className="mx-32"/>
				<div>
					<Line style={lineStyle}/>
				</div>
				<ChildArtikel />
			 </div>
		</div>
  )

}

export default Artikel;
