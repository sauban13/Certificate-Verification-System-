import React, { useState } from 'react';
import Layout from '../components/Layout';
import CertificateDesign from '../components/CertificateDesign';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const GetCertificate = () => {
  const [formData, setFormData] = useState({
    name: '', mobile: '', email: '', dob: '', gender: '',
    college: '', course: '', admissionNumber: '', section: '',
    semester: '', address: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [certData, setCertData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'mobile') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    try {
      // Check if certificate with this admission number already exists
      const q = query(collection(db, "certificates"), where("admissionNumber", "==", formData.admissionNumber));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        throw new Error('A certificate with this admission number already exists.');
      }

      // Generate unique certificate details
      const certificateNumber = `RVS-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      const issueDate = new Date().toISOString();
      
      // Save to Firebase
      const certificateRecord = {
        fullName: formData.name,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        dob: formData.dob,
        college: formData.college,
        course: formData.course,
        admissionNumber: formData.admissionNumber,
        section: formData.section,
        semester: formData.semester,
        address: formData.address,
        certificateNumber,
        issueDate
      };

      await addDoc(collection(db, "certificates"), certificateRecord);

      // Show success modal
      setCertData(certificateRecord);
      setShowModal(true);
      setFormData({
        name: '', mobile: '', email: '', dob: '', gender: '',
        college: '', course: '', admissionNumber: '', section: '',
        semester: '', address: ''
      });

    } catch (err) {
      setError(err.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Welcome to the Certificate Generator</h1>
        
        <div className="card-3d overflow-hidden mt-8">
          <div className="bg-primary/5 px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Register for Your Certificate</h2>
          </div>
          
          <div className="p-8 md:p-12">
            {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-200">{error}</div>}
            {message && <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6 border border-green-200">{message}</div>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-3d" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="input-3d" placeholder="Enter 10-digit mobile number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-3d" placeholder="Enter your email address" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="input-3d" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="input-3d bg-transparent">
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">College Name</label>
                <input type="text" name="college" value={formData.college} onChange={handleChange} required className="input-3d" placeholder="Enter your college name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Course</label>
                <input type="text" name="course" value={formData.course} onChange={handleChange} required className="input-3d" placeholder="Enter your course name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Admission Number</label>
                <input type="text" name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} required className="input-3d" placeholder="Enter your admission number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Section</label>
                <input type="text" name="section" value={formData.section} onChange={handleChange} required className="input-3d" placeholder="Enter your section" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Semester</label>
                <select name="semester" value={formData.semester} onChange={handleChange} required className="input-3d bg-transparent">
                  <option value="" disabled>Select your semester</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i+1} value={`Semester ${i+1}`}>Semester {i+1}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address / Location</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required rows="3" className="input-3d resize-none" placeholder="📍 Enter your full address"></textarea>
              </div>
              
              <div className="md:col-span-2 mt-6">
                <button type="submit" disabled={loading} className="btn-3d w-full py-4 rounded-xl text-lg flex justify-center items-center">
                  {loading ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {showModal && certData && (
        <div className="fixed inset-0 bg-black/80 z-[100] overflow-y-auto p-4 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full relative p-8 m-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-primary mb-8">🎓 Your Certificate is Ready!</h2>
            
            <CertificateDesign certData={certData} />
            
            <div className="flex flex-wrap gap-6 justify-center mt-8 relative z-50">
              <a 
                href="/download-certificate"
                className="btn-3d px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Go to Download Page
              </a>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold shadow-sm transition-colors text-lg"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GetCertificate;
