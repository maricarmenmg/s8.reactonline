import { Link } from 'react-router-dom';

import HeroImage from '../assets/images/hero/princess-leia.png';

  export default function Hero() {
    
  return (
    <section className="relative mt-10"> 
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-60 md:pb-20 ">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1 className="h1 font-prompt font-normal  text-project-100 mb-6" data-aos="fade-right" data-aos-delay="100">
              WHAT’S THE GREATEST SHIP DESIGN IN STAR WARS?.{' 🪩 '}

              </h1>
              <p className="font-prompt  text-xl text-gray-600 mb-10" data-aos="fade-right" data-aos-delay="200">
              Nuestro objetivo es ayudarte a construir una presencia digital efectiva para tu negocio.
              </p>
              {/* Buttons */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20">
                <div>
                  <Link className="btn text-white bg-project-500 hover:bg-blue-600 w-full shadow-sm" to="/budget">
                    Solicita tu presupuesto
                  </Link>
                </div>
  
              </div>
   
            </div>
            {/* Image */}
            <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-32 mt-12 md:-mt-12">
              <img src={HeroImage} className="md:max-w-none" width="384" height="459" alt="Hero Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


