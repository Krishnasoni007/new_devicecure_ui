import BlogCard from "../components/homeComponent/Blog/BlogCard";
import Brand from "../components/homeComponent/Brands";
import HeroSection from "../components/homeComponent/HeroSection";
import Slider from "../components/Slider";
import Testimonial from "../components/homeComponent/Testimonial";
import WhyChoose from "../components/homeComponent/WhyChoose";
import Layout from "../components/Layout";
import Backdrop from "../components/UI/Backdrop";



export default function Home() {
  return (
    <div>

      <HeroSection />
      <Brand />
      <Slider />
      <WhyChoose />
      <BlogCard />
      <Testimonial />
    </div>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

