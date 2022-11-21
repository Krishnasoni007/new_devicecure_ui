import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
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
  const brands = [
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",},
    {link:"kavya sharma",icon:"https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",},
    {link:"kavya sharma",icon:"https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png",},
    {link:"kavya sharma",icon:"https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Realme-realme-_logo_box-RGB-01.png",},
    {link:"kavya sharma",icon:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Vivo_New_Logo_2019.png",},
    {link:"kavya sharma",icon:"https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-smartphone-brand-logo-png-6.png",},
    {link:"kavya sharma",icon:"https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png",},
  ];
export default function Brand() {
    const settings = {
        infinite: true,
        speed: 500,
        infinite: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
  return (
    <section className="brands mt-4 lg:mt-8">
        <div className="container">
        <h2 className="slider_title mb-4">popular brand we <span>repair</span></h2>
            <Slider {...settings}>
            {brands.map(({icon, link}) => {
            return (
                <div key={link}>
                    <a href={link} className="">
                        <img src={icon} className="h-8 lg:h-14 m-6"/>
                    </a>
                </div>
            )
             })}
            </Slider>
        </div>
    </section>
  );
}