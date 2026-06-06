import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={handleLoginClick} />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />

      {/* Login Modal Placeholder */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="card-3d w-full max-w-md relative overflow-hidden">
            <button 
              onClick={closeLoginModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" required className="input-3d" placeholder="user@rvscet.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input type="password" required className="input-3d" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Captcha: <span className="font-bold tracking-widest bg-gray-200 px-3 py-1 rounded-lg ml-2 shadow-inner">A3T24H</span></label>
                  <input type="text" required placeholder="Enter Captcha" className="input-3d" />
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn-3d w-full py-4 rounded-xl text-lg flex justify-center items-center">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm text-gray-600">
                Forgot your password? <a href="#" className="text-primary hover:underline font-semibold">Reset now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
