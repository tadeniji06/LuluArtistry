const ContactBody = () => {
	return (
		<div className='max-w-4xl mx-auto px-6 py-12 space-y-12'>
			{/* General Inquiries */}
			<div>
				<h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900'>
					General Inquiries & Support
				</h3>
				<p className='text-gray-700 mb-4'>
					Have questions about our services, products, bookings, or
					training sessions? We’re always happy to help!
				</p>
				<ul className='space-y-3 text-gray-700'>
					<li>
						<strong>WhatsApp:</strong>{" "}
						<a
							href='https://wa.me/09018022296'
							className='text-primary-gold underline'
						>
							09018022296
						</a>{" "}
						– Get instant responses from our team.
					</li>
					<li>
						<strong>Instagram DM:</strong>{" "}
						<a
							href='https://instagram.com/luluartistry.ng'
							className='text-primary-gold underline'
						>
							@luluartistry.ng
						</a>{" "}
						– Slide into our DMs for inquiries, collaborations, or
						feedback.
					</li>
					<li>
						<strong>Email:</strong>{" "}
						<a
							href='mailto:luluartistry321@gmail.com'
							className='text-primary-gold underline'
						>
							luluartistry321@gmail.com
						</a>{" "}
						– Order issues, training registration, or proposals.
					</li>
				</ul>
			</div>

			{/* Our Studio */}
			<div>
				<h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900'>
					Our Studio
				</h3>
				<ul className='list-disc pl-6 space-y-2 text-gray-700'>
					<li>We’re proudly based in Calabar, Nigeria.</li>
					<li>
						All services and product orders are handled from our
						studio.
					</li>
				</ul>
			</div>

			{/* Business Hours */}
			<div>
				<h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-900'>
					Business Hours
				</h3>
				<ul className='list-disc pl-6 space-y-2 text-gray-700'>
					<li>Monday – Saturday: 9 AM – 6 PM</li>
					<li>Sunday: Closed (except special sessions)</li>
				</ul>
			</div>
		</div>
	);
};
export default ContactBody;
