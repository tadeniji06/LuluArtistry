import { hero } from "@/assets";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='relative w-full h-[500px] md:h-[700px] overflow-hidden'>
			{/* Background Image */}
			<Image
				src={hero}
				fill
				priority
				className='object-cover'
				quality={90}
				style={{ zIndex: -2 }}
				alt='Hero Image'
			/>

			{/* Dark Overlay */}
			<div className='absolute inset-0 bg-black/40' />

			{/* Content */}
			<div className='relative z-10 flex  items-center justify-start h-full p-8'>
				<div className='flex flex-col gap-8 text-white max-w-5xl md:px-20'>
					<h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
						Lash Like A Pro
					</h1>
					<p className='text-lg md:text-xl font-medium leading-relaxed max-w-[500px] text-gray-200'>
						Premium lash trays, glue, and tools made for artists who
						care about quality. Crafted by Lulu’s Artistry, trusted by
						beauty pros across Nigeria.
					</p>
					<button className='bg-primary-gold hover:bg-primary-gray cursor-pointer py-3 rounded-2xl'>
						SHOP NOW
					</button>
					<div className='flex justify-around items-center gap-4'>
						<p className="leading-tight">Need a personal touch?</p>
						<button className='bg-inherit border border-primary-gold text-primary-gold py-2 px-2 rounded-xl'>
							Book Session
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
