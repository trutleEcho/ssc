import {Header} from "@/components/layout/header";
import {HeroSection} from "@/components/sections/hero-section";
import {ThreeColumnImageCards} from "@/components/sections/three-column-image-cards";
import {HorizontalCarouselGallery} from "@/components/sections/horizontal-carousel-gallery";
import {SimpleGridStats} from "@/components/sections/simple-grid-stats";
import {SimpleSplitBento} from "@/components/sections/simple-split-bento";
import {CompanyLogoTestimonials} from "@/components/sections/company-logo-testimonials";
import {Footer} from "@/components/layout/footer";
import {GradientOverlayCta} from "@/components/sections/gradient-overlay-cta";


export default function HomePage() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <ThreeColumnImageCards/>
            <HorizontalCarouselGallery/>
            <SimpleGridStats/>
            <SimpleSplitBento/>
            <CompanyLogoTestimonials/>
            <GradientOverlayCta/>
            <Footer/>
        </>
    );
}