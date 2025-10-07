import Features from "@/components/home/Features";
import FounderCard from "@/components/home/FounderCard";
import Hero from "@/components/home/Hero";
import Arrivals from "@/components/home/Arrivals";
import Wl from "@/components/home/Wl";
import Curated from "@/components/home/Curated";
import FollowUs from "@/components/home/FollowUs";
import Testimony from "@/components/home/Testimony";



function Page() {
    return (
        <>
            <Hero />
            <Features />
            <Curated />
            <FounderCard />
            <Arrivals />
            <Testimony />
            <FollowUs />
            <Wl />
        </>
    );
}

export default Page;
