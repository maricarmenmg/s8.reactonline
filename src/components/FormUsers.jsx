import { useState } from 'react';
import { Link } from 'react-router-dom';


// Login Form Component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Comprobar si el usuario existe en el localStorage
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Error en el inicio de sesión');
    }
  };

  
  return (
  <section className="bg-transparent">

    <div className="max-w-6xl mx-auto py-32 sm:px-26">
      <div className="pt-36 pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h3 className="h3 text-project-100 font-prompt">Welcome back <br/>Log In to your account</h3>
          <h4 className="h4 text-gray-600 font-prompt font-light"> To see the starships list you must to be logged in.</h4>
        </div>

   <div className="max-w-sm mx-auto">
        <form>
          <div className="flex flex-wrap -mx-3 mb-4">
               <div className="w-full px-3">
                  <label className="block text-project-100 text-lg font-prompt font-medium mb-1" htmlFor="email">Email</label>
                  <input 
                  id="email" 
                  type="email" 
                  className="form-input w-full text-gray-800" 
                  placeholder="Enter your email address" required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  
                </div>
            </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-project-100 text-lg font-prompt font-medium mb-1" htmlFor="password">Password</label>
                      </div>
                      <input 
                      id="password" 
                      type="password" 
                      className="form-input w-full text-gray-800" 
                      placeholder="Enter your password" required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Button Login */}

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={handleLogin}> Sign in </button>
                    </div>
                  </div>

                  <div className="text-gray-600 text-center mt-6">
                  Don’t you have an account? <Link to="/signup" className="text-blue-600 font-prompt  hover:underline transition duration-150 ease-in-out">Sign up</Link>
                 </div>
                </form>
       </div>
       </div>
       </div>
</section>
  );
};


// Register Form Component

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Guardar el usuario en el localStorage
    const user = { email, password };
    localStorage.setItem(email, JSON.stringify(user));
    console.log('Registro exitoso');
  };


  return (

  <section className="bg-transparent">

    <div className="max-w-6xl mx-auto py-32 sm:px-26">
       <div className="pt-36 pb-12 md:pt-40 md:pb-20">

        {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
           <h3 className="h3 text-project-100 font-prompt">Welcome<br/>Sign Up your new account</h3>
           <h4 className="h4 text-gray-600 font-prompt"> Check the specifications of all Star Wars ships.</h4>
           
        </div>

       {/* Form Register */}
     <div className="max-w-sm mx-auto">
          <form>
             <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-project-100 text-lg font-prompt  font-medium mb-1" htmlFor="email">Email</label>
                  <input 
                  id="email" 
                  type="email" 
                  className="form-input w-full text-gray-800" 
                  placeholder="Enter your email address" required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />  
            </div>
        </div>

           <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                  <label className="block text-project-100 text-lg font-prompt font-medium mb-1" htmlFor="password">Password</label>
                  </div>
                  <input 
                  id="password" 
                  type="password" 
                  className="form-input w-full text-gray-800" 
                  placeholder="Enter your password" required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

            {/* Button Register */}

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"  onClick={handleRegister}> Sign up </button>
                </div>
              </div>

                                
              <div className="text-gray-600 text-center mt-6">
                 You have an account? Log in <Link to="/signin" className="text-blue-600 font-prompt hover:underline transition duration-150 ease-in-out">Sign in</Link>
              </div>
                 
            </form>

   </div>
   </div>
   </div>
</section>

  );
};

export { Login, Register };
