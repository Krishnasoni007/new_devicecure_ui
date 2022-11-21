import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );

}

// const backgroundUrl = "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
const userdate = [
  {name: "Deepak sharma", backgroundUrl: "/test1.jpg", details: "Thanks for saving my time with your service! As “mobile phone is a very important tool nowadays for professional life”, It affects the whole work when the phone get damaged/broken or if it has any internal issue but here’s the solution @Devicecure with Quick Response Service, Best Quality and Genuine Charges. Keep Growing!"},
  {name: "Ajay Naruka", backgroundUrl: "/test4.jpg", details: "Superb experience with Device Cure…… repaired on time….. quality upto mark….." },
  {name: "Suyog Bora", backgroundUrl: "/test2.jpg", details: "Great service…great experience….  "}, 
  {name: "Nitu Pandel", backgroundUrl: "/test5.jpg", details: "Good service, they repair my damaged mobile screen within 20 minutes. Thank you Devicecure " },
  {name: "Lavina Jain ",backgroundUrl: "/test3.jpg",details: "Good service, they repaired my phone real quick.  " }
];
export default function Testimonial() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="textimonial py-8 mt-4 lg:mt-8">
      <div className="container">
        <h2 className="slider_title mb-4">what our <span>client</span> says</h2>
        <Slider {...settings}>
          {userdate.map(({ backgroundUrl, name, details }, ind) => {
            return (
              <div className="px-2" key={ind}>

                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer testi_box">

                  <img className="object-cover w-full h-96" src={backgroundUrl} alt={name} />

                  <div className="absolute bottom-0 left-0 px-6 py-4 testi_detail">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white ">{name}</h4>
                    <p className="leading-normal text-gray-100">{details.slice(0, 50)}...</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  );
}