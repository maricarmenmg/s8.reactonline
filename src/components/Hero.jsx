
import HeroImage from '../assets/images/hero/princess-leia.png';

  export default function Hero() {
    
  return (

    <section className="relative mt-40">
      <div className=" absolute inset-0 pointer-events-none -z-10 " aria-hidden="true" />
      <div className="mx-auto px-2 pt-36 sm:px-8 bg-black text-light-100 text-center font-prompt ">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</div>
      <div className="max-w-7xl mx-auto px-2 py-0 sm:px-8  bg-contain  bg-no-repeat bg-center bg-[url(https://lumiere-a.akamaihd.net/v1/images/obi-wan-marvel-sashsingle-hero-desktop_6cd9c70f.jpeg?region=0,0,2048,878)]">
        <div className="pt-32 pb-12 md:pt-60 md:pb-20 ">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h3 className="h3 p-6 capitalize font-prompt font-normal  text-gray-100 mb-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
               Marvel Will Bring the <i>Obi-Wan Kenobi</i> Disney+ Series to Comic
              </h3>
              <p className="font-prompt text-2xl p-8 text-gray-100 mb-10" data-aos="fade-right" data-aos-delay="200">
              Check out the covers of issue #1 and meet the creative team.
              </p>
              <button type="button">HEllo</button>
              
   
            </div>
            {/* Image */}
            <div className=" max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-32 mt-12 md:-mt-12">
              <img src={HeroImage} className="md:max-w-none" width="384" height="459" alt="Hero Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


