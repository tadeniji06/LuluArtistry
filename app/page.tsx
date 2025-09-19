import Curated from "@/components/home/Curated";
import Features from "@/components/home/Features";
import FounderCard from "@/components/home/FounderCard";
import Hero from "@/components/home/Hero";

const page = () => {
	return (
		<>
			<Hero />
      <Features />
      <Curated />
						<FounderCard />
		</>
	);
};
export default page;
