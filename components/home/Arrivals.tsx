import { brows, lash, nails, tatoo } from "@/assets";
import Image from "next/image";

const Curated = () => {
	const items = [
		{
			title: "Eye Patch",
			image: lash,
			desc: "5000",
		},
		{
			title: "Lash Bed Blankets",
			image: nails,
			desc: "22,000",
		},
		{
			title: "Brow Mapping Pen",
			image: tatoo,
			desc: "4000",
		},
		{
			title: "Lash Wash Brush",
			image: brows,
			desc: "22,000",
		},
		{
			title: "Moon Light Tray",
			image: lash,
			desc: "22,000",
		},
		{
			title: "Stool",
			image: nails,
			desc: "40,000",
		},
		{
			title: "Lash Bed",
			image: tatoo,
			desc: "230,000",
		},
		{
			title: "Disputable Bed Cover",
			image: brows,
			desc: "24,000",
		},
	];

	return (
		<div className='p-6 sm:p-8 mt-8'>
			{/* Header */}
			<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6'>
				<h1 className='text-2xl sm:text-3xl font-bold'>
					NEW ARRIVALS
				</h1>
				<p className='text-gray-600 max-w-lg text-sm sm:text-base leading-relaxed'>
					VIEW ALL
				</p>
			</div>

			{/* Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
				{items.map((item, i) => (
					<div
						key={i}
						className='flex flex-col gap-3 items-start text-gray-800'
					>
						<Image
							src={item.image}
							alt={item.title}
							className='object-cover rounded-lg w-full h-48 sm:h-56 lg:h-64'
						/>
						<h2 className='font-semibold text-lg'>{item.title}</h2>
						<p className='text-sm sm:text-base'>{item.desc}</p>
						<p className='text-sm font-medium text-primary-gold cursor-pointer hover:underline'>
							Add To Cart
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Curated;
