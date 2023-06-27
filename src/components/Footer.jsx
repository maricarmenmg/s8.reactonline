import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    
 <footer className="p-4  md:p-5 lg:p-5 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
  {/* Logo */}
  <Link className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white" to="/" aria-label="logo">
  <svg width="50" height="50" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M210.175 53.105L180 35L203.575 60.98C220.75 80.37 230 98.72 230 120C230 148.66 213.21 160 195 160C170.745 160 165 141.085 165 135C165 115.43 182.74 99.215 198.79 93.56L206.74 90.765L183.255 68.21C180.735 69.82 178.975 71.03 178.975 71.03C176.885 72.46 173.775 74.86 170.095 78.535C170.095 78.535 164.605 84.685 159.995 90C159.995 80 161.78 73.52 161.78 73.52C163.565 67.77 166.96 63.18 169.725 60.17L173.28 56.65L150.145 35L150 35.125L149.855 35L126.715 56.64L130.265 60.165C133.025 63.175 136.425 67.765 138.21 73.515C138.21 73.515 140 80 140 90C134.14 82.42 129.9 78.535 129.9 78.535C126.225 74.86 123.115 72.465 121.02 71.03C121.02 71.03 119.26 69.82 116.74 68.21L93.255 90.765L101.205 93.56C117.26 99.215 135 115.43 135 135C135 141.085 129.255 160 105 160C86.79 160 70 148.66 70 120C70 98.72 79.25 80.37 96.425 60.98L120 35L89.825 53.105C57.335 72.32 37.355 104.71 35 142.31V150.91C35 213.82 86.59 265 150 265C213.41 265 265 213.82 265 150.91V142.31C262.645 104.71 242.665 72.32 210.175 53.105Z" fill="#484545"/>
</svg>
</Link>

      <p className="font-prompt text-xl text-center my-6 text-gray-600 dark:text-gray-600">may the force be with you</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>

          </li>
          <li>
              <a href="/startships" className="font-prompt text-project-100 mr-4 hover:underline md:mr-6">NAVES</a>
          </li>
          <li>
              <a href="*" className="font-prompt  text-project-100 m mr-4 hover:underline md:mr-6 ">PERSONAJES</a>
          </li>
          <li>
          <a href="*"  className="font-prompt  text-project-100 m mr-4 hover:underline md:mr-6">PLANETAS</a>
          </li>
  
      </ul>
      <span className="font-prompt text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 @mcarmenmg</span>
  </div>
</footer>
  );
}

