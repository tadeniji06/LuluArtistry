import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
	return (
		<div className='bg-primary-gray w-full text-white'>
			<footer className='max-w-7xl mx-auto px-6 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
				{/* Brand */}
				<div className='flex flex-col gap-4'>
					<Image
						src={logo}
						alt='Lulu Artistry'
						className='w-[120px] h-auto'
					/>
					<p className='text-sm leading-relaxed'>
						Premium beauty essentials for bold women and beauty pros.
						Lulu Artistry delivers high-quality lashes, nails, brows,
						and tattoos — crafted for confident self-expression and
						everyday glam.
					</p>
					<div className='flex gap-4 mt-2'>
						<Clock className='w-5 h-5 cursor-pointer hover:text-primary-gold' />
						<Clock className='w-5 h-5 cursor-pointer hover:text-primary-gold' />
						<Clock className='w-5 h-5 cursor-pointer hover:text-primary-gold' />
						<Phone className='w-5 h-5 cursor-pointer hover:text-primary-gold' />
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<p className='font-semibold mb-3'>Quick Links</p>
					<div className='flex flex-col gap-2 text-sm'>
						{headerLinks.map((item, i) => (
							<p
								key={i}
								className='cursor-pointer hover:text-primary-gold'
							>
								{item.title}
							</p>
						))}
					</div>
				</div>

				{/* Customer Service */}
				<div>
					<p className='font-semibold mb-3'>Customer Service</p>
					<div className='flex flex-col gap-2 text-sm'>
						<p className='cursor-pointer hover:text-primary-gold'>
							Contact Us
						</p>
						<p className='cursor-pointer hover:text-primary-gold'>
							FAQ
						</p>
						<p className='cursor-pointer hover:text-primary-gold'>
							Shipping Policy
						</p>
						<p className='cursor-pointer hover:text-primary-gold'>
							Return & Refund
						</p>
					</div>
				</div>

				{/* Contact Info */}
				<div>
					<p className='font-semibold mb-3'>Contact Information</p>
					<div className='flex flex-col gap-2 text-sm'>
						<p className='flex items-center gap-2'>
							<MapPin size={16} /> 123 Beauty Street, Lagos, Nigeria
						</p>
						<p className='flex items-center gap-2'>
							<Mail size={16} /> info@lulustore.com
						</p>
						<p className='flex items-center gap-2'>
							<Phone size={16} /> +234 90000000
						</p>
						<p className='flex items-center gap-2'>
							<Clock size={16} /> Mon - Fri: 9AM - 6PM
						</p>
					</div>
				</div>
			</footer>

			{/* Bottom strip */}
			<div className='text-center text-xs text-gray-500 py-4 border-t border-gray-300'>
				© {new Date().getFullYear()} Lulu Artistry. All rights
				reserved.
			</div>
		</div>
	);
};

export default Footer;
