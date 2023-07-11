


  export default function Hero() {
    
  return (

    <section className="relative mt-40">
      <div className=" absolute inset-0 pointer-events-none -z-10 " aria-hidden="true" />
      <div className="mx-auto pt-24  pb-8 sm:px-8 bg-black text-light-100 text-center font-prompt ">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</div>
      <div className="max-w-7xl mx-auto p-12 sm:px-12  bg-cover bg-no-repeat bg-center bg-[url(https://lumiere-a.akamaihd.net/v1/images/obi-wan-marvel-sashsingle-hero-desktop_6cd9c70f.jpeg?region=0,0,2048,878)]">
        <div className="pt-12 pb-12 md:pt-20 md:pb-10">
          {/* Hero content */}
          <div className="relative max-w-lg mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="max-w-2xl py-12 px-12">
              {/* Copy */}
              <h3 className="px-10 pl-2 pb-8 h3 capitalize font-prompt font-normal  text-gray-100  aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
               Marvel Will Bring the <i>Obi-Wan Kenobi</i> Disney+ Series to Comic
              </h3>
              <p className="px-10 pl-2 pb-8 font-prompt text-2xl  text-gray-100" data-aos="fade-right" data-aos-delay="200">
              Check out the covers of issue #1 and meet the creative team.
              </p>
              <button className="px-12 py-2 font-prompt font-semibold text-lg  text-gray-800 rounded-full shadow-sm bg-yellow-400" type="button">Explore</button>
              
            </div>
            {/* Image */}
            <div className=" max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-32 mt-12 md:-mt-12">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


