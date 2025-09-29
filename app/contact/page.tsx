import ContactForm from "@/components/interactive/ContactForm";
import ContactHero from "@/components/contact/ContactHero";

const page = () => {
	return (
		<div>
			<ContactHero />
			<div className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-2xl mx-auto px-6">
					<div className="text-center mb-12">
						<h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
							Get In Touch
						</h1>
						<p className="text-gray-600 text-lg">
							Have questions? We&apos;d love to hear from you. 
							Send us a message and we&apos;ll respond as soon as possible.
						</p>
					</div>
					
					<div className="bg-white rounded-lg shadow-lg p-8">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};
export default page;
