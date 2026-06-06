import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-primary pb-2 inline-block">Reach Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone Numbers</h3>
                  <p className="text-gray-600 mt-1">College: 7033000777</p>
                  <p className="text-gray-600">Placement: 9110969068</p>
                  <p className="text-gray-600">Principal: 07033000777</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email Address</h3>
                  <p className="text-gray-600 mt-1"><a href="mailto:info@rvscet.com" className="hover:text-primary transition-colors">info@rvscet.com</a></p>
                  <p className="text-gray-600"><a href="mailto:rvscet@gmail.com" className="hover:text-primary transition-colors">rvscet@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-primary pb-2 inline-block">Locate Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">College Address</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Edalbera, P.O. :Bhilai Pahari, NH-33, Jamshedpur, Jharkhand, (INDIA)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">City Address</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    R.V.S.C.E.T, Binda Apartments, Mills Area, Behind Basant Cinema, Sakchi, Jamshedpur-831001
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Phone: 0657-2431872</p>
                    <p>Fax: 0657- 2435439</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
