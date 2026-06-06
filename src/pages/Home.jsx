import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  const [toastMessage, setToastMessage] = useState('');

  const handleComingSoon = (e, portalName) => {
    e.preventDefault();
    setToastMessage(`${portalName} is Coming Soon!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <Layout>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in-down">
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="/images/collage.jpg" 
            alt="RVS College Campus" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between h-full max-w-7xl">
          <div className="w-full md:w-1/2 text-white pr-0 md:pr-12">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-red-200 text-sm font-semibold mb-6 tracking-wider">
              ESTD. 2004 • JAMSHEDPUR
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
              R.V.S College of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-primary">Engineering & Tech</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 drop-shadow-md leading-relaxed border-l-4 border-primary pl-4">
              Empowering minds and shaping the future. Experience excellence in academia, research, and holistic development at Jharkhand's premier institution.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <Link to="/about" className="btn-3d py-4 px-10 rounded-2xl text-lg text-white">
                Explore Campus
              </Link>
              <Link to="/contact" className="card-3d bg-white/10 hover:bg-white/30 text-white font-bold py-4 px-10 rounded-2xl border-white/20 transition-all shadow-xl">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Login Portals Card */}
          <div className="w-full md:w-5/12 mt-16 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl transform -rotate-6"></div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                Institutional Portals
              </h2>
              
              <div className="space-y-4">
                <button onClick={(e) => handleComingSoon(e, "Student Portal")} className="w-full group bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-300 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">Student Login</h3>
                      <p className="text-xs text-gray-400">Access ERP, assignments, and results</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <button onClick={(e) => handleComingSoon(e, "Faculty Portal")} className="w-full group bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-300 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">Teacher / Faculty Login</h3>
                      <p className="text-xs text-gray-400">Manage attendance and grades</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <button onClick={(e) => handleComingSoon(e, "Admin Portal")} className="w-full group bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500/20 p-3 rounded-lg text-red-300 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">Admin Login</h3>
                      <p className="text-xs text-gray-400">System management & controls</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl py-8 px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-1">20+</h3>
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Years Legacy</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-1">A+</h3>
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Grade Institution</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-1">10k+</h3>
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Alumni</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-1">Top</h3>
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Ranked College</p>
        </div>
      </section>

      {/* Certificate Services Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-3">Digital Services</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">Official Certificate Portal</h3>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8 shadow-inner"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              A secure, paperless platform for generating, downloading, and instantly verifying digital credentials from RVS College.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="card-3d p-10 group hover:-translate-y-3 transition-transform duration-300">
              <div className="w-20 h-20 bg-gray-100 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Generate Certificate</h3>
              <p className="text-gray-600 mb-10 leading-relaxed font-medium">Apply for and generate your official digital certificate directly through our secure platform in minutes.</p>
              <Link to="/get-certificate" className="btn-3d inline-flex items-center justify-center w-full py-4 rounded-xl text-sm transition-all">
                Get Started
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="card-3d p-10 group hover:-translate-y-3 transition-transform duration-300 relative border-primary/20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-primary text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-red-900/30 border border-red-400">
                Most Used
              </div>
              <div className="w-20 h-20 bg-gray-100 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors mt-2">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Download Record</h3>
              <p className="text-gray-600 mb-10 leading-relaxed font-medium">Access your previously generated certificates anytime, anywhere. Save them directly as a PDF.</p>
              <Link to="/download-certificate" className="btn-3d inline-flex items-center justify-center w-full py-4 rounded-xl text-sm transition-all">
                Download Now
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="card-3d p-10 group hover:-translate-y-3 transition-transform duration-300">
              <div className="w-20 h-20 bg-gray-100 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Verify Authenticity</h3>
              <p className="text-gray-600 mb-10 leading-relaxed font-medium">Employers and institutions can easily cross-check and verify the authenticity of credentials issued by us.</p>
              <Link to="/verify-certificate" className="btn-3d inline-flex items-center justify-center w-full py-4 rounded-xl text-sm transition-all">
                Verify Document
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
