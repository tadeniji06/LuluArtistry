import { aboutLulu } from "@/assets";
import Image from "next/image";

const About = () => {
	return (
		<div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 px-6 sm:px-10 py-12 max-w-7xl mx-auto'>
			{/* Image */}
			<Image
				src={aboutLulu}
				alt='About Lulu'
				className='rounded-lg w-full sm:w-[400px] lg:w-[450px] object-cover'
			/>

			{/* Text Section */}
			<div className='flex flex-col gap-4 text-gray-700 max-w-2xl'>
				<h2 className='text-2xl sm:text-3xl font-bold leading-snug'>
					Hey lovelies — I’m Lulu, the heart behind Lulu’s Artistry.
				</h2>

				<p className='leading-relaxed text-sm sm:text-base'>
					When I first began my journey as a lash and brow artist, I
					struggled to find products I could fully trust — products
					that delivered consistent results, felt luxurious, and
					respected the skin and confidence of real women like me.
				</p>

				<p className='leading-relaxed text-sm sm:text-base'>
					That’s why I created Lulu’s Artistry — not just a beauty
					brand, but a full experience built on intention, quality,
					and empowerment.
				</p>

				<p className='leading-relaxed text-sm sm:text-base'>
					Every lash tray, glue bottle, and tool in our store has been
					handpicked, tested, and trusted by artists like myself. We
					only sell what we proudly use on our clients, students, and
					even ourselves.
				</p>

				<p className='leading-relaxed text-sm sm:text-base'>
					This is more than beauty. It’s your glow-up toolbox. Your
					artistry deserves luxury — and that’s exactly what we’re
					here to deliver.
				</p>

				<p className='mt-4 font-medium text-primary-gold'>
					With love, <br /> Lulu — Founder, Lulu’s Artistry
				</p>
			</div>
		</div>
	);
};

export default About;
