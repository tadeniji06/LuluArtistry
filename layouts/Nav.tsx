"use client";

import { useState } from "react";
import { headerLinks } from "@/utils/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className='relative mt-5 mb-5'>
			{/* Desktop Nav */}
			<div className='hidden md:flex justify-center items-center gap-10'>
				{headerLinks.map((item, i) => (
					<Link
						key={i}
						href={item.link}
						className='text-gray-700 hover:text-primary-gold font-semibold'
					>
						{item.title}
					</Link>
				))}
			</div>

			{/* Mobile Nav Toggle */}
			<div className='md:hidden flex items-center justify-end'>
				<button onClick={() => setOpen(!open)} className='p-2'>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Nav Menu */}
			{open && (
				<div className='absolute top-12 left-0 w-full bg-white shadow-md flex flex-col gap-6 p-6 md:hidden z-50'>
					{headerLinks.map((item, i) => (
						<Link
							key={i}
							href={item.link}
							className='text-gray-700 hover:text-primary-gold font-semibold'
							onClick={() => setOpen(false)}
						>
							{item.title}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Nav;
