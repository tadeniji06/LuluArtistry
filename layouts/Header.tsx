import { cart, login, logo, search, wishlist } from "@/assets";
import Image from "next/image";

const Header = () => {
	return (
		<div className='flex items-center justify-between p-4 border-b border-gray-300 md:px-10'>
			{/* Logo */}
			<Image
				src={logo}
				alt='logo'
				width={120}
				height={40}
				className='object-cover cursor-pointer w-[90px] sm:w-[110px] md:w-[120px]'
			/>

			{/* Search */}
			<div className='hidden sm:flex border border-gray-400 rounded-2xl px-3 py-2 items-center gap-2 flex-1 mx-4 max-w-xs md:max-w-md lg:max-w-lg'>
				<Image
					src={search}
					alt='search'
					width={20}
					height={20}
					className='object-cover'
				/>
				<input
					type='text'
					className='outline-none border-none w-full text-sm'
					placeholder='Search...'
				/>
			</div>

			{/* Icons */}
			<div className='flex items-center gap-3 sm:gap-4'>
				<Image
					src={wishlist}
					alt='wishlist'
					className='w-5 h-5 sm:w-6 sm:h-6'
				/>
				<Image
					src={cart}
					alt='cart'
					className='w-5 h-5 sm:w-6 sm:h-6'
				/>
				<Image
					src={login}
					alt='login'
					className='w-5 h-5 sm:w-6 sm:h-6'
				/>
			</div>
		</div>
	);
};

export default Header;
