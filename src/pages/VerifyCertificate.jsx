import React, { useState } from 'react';
import Layout from '../components/Layout';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const VerifyCertificate = () => {
  const [formData, setFormData] = useState({ certificateNumber: '', admissionNumber: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [certData, setCertData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCertData(null);

    try {
      const q = query(
        collection(db, "certificates"), 
        where("certificateNumber", "==", formData.certificateNumber),
        where("admissionNumber", "==", formData.admissionNumber)
      );
      
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('Certificate not found or invalid details.');
      }

      // Valid certificate found
      const doc = querySnapshot.docs[0];
      setCertData({ ...doc.data(), status: 'Verified' });
      
    } catch (err) {
      setError(err.message || 'Error verifying certificate.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Verify Your Certificate</h1>
        
        <div className="card-3d overflow-hidden mt-12 mb-20 max-w-2xl mx-auto">
          <div className="bg-primary/5 px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Enter Details Below</h2>
          </div>
          
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Certificate Number</label>
                <input type="text" name="certificateNumber" value={formData.certificateNumber} onChange={handleChange} required className="input-3d" placeholder="Enter certificate number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Admission Number</label>
                <input type="text" name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} required className="input-3d" placeholder="Enter your admission number" />
              </div>
              
              <div className="mt-4">
                <button type="submit" disabled={loading} className="btn-3d w-full py-4 rounded-xl text-lg flex justify-center items-center">
                  {loading ? 'Verifying...' : 'Verify Authenticity'}
                </button>
              </div>
            </form>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 text-center font-semibold">{error}</div>}

            {certData && certData.status === "Verified" && (
              <div className="mt-10 border-2 border-green-400 bg-green-50/50 rounded-2xl p-8 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="flex flex-col items-center gap-4 mb-8 justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/40">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-3xl font-black text-green-800 drop-shadow-sm">Verification Successful</h3>
                </div>
                
                <div className="card-3d overflow-hidden relative z-10 border-none shadow-md">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50 w-1/3">Full Name</th><td className="px-6 py-4 text-gray-800">{certData.fullName}</td></tr>
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50">Admission Number</th><td className="px-6 py-4 text-gray-800">{certData.admissionNumber}</td></tr>
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50">Certificate Number</th><td className="px-6 py-4 text-gray-800">{certData.certificateNumber}</td></tr>
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50">Course</th><td className="px-6 py-4 text-gray-800">{certData.course}</td></tr>
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50">Issue Date</th><td className="px-6 py-4 text-gray-800">{new Date(certData.issueDate).toLocaleDateString()}</td></tr>
                      <tr className="hover:bg-gray-50"><th className="px-6 py-4 font-semibold text-gray-700 bg-gray-50/50">Status</th><td className="px-6 py-4 font-bold text-green-600">{certData.status}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyCertificate;
