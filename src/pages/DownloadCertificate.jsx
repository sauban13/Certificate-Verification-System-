import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import CertificateDesign from '../components/CertificateDesign';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

const DownloadCertificate = () => {
  const [formData, setFormData] = useState({ admissionNumber: '', dob: '' });
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [certData, setCertData] = useState(null);
  
  const certificateRef = useRef(null);

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
        where("admissionNumber", "==", formData.admissionNumber),
        where("dob", "==", formData.dob)
      );
      
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('Certificate not found. Please check your Admission Number and Date of Birth.');
      }

      // Get the first matching document
      const doc = querySnapshot.docs[0];
      setCertData(doc.data());
      
    } catch (err) {
      setError(err.message || 'Error fetching certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    
    try {
      setDownloading(true);
      const element = certificateRef.current;
      
      const dataUrl = await toJpeg(element, { 
        quality: 1.0, 
        backgroundColor: '#ffffff', 
        pixelRatio: 2 
      });
      
      const width = element.offsetWidth * 2;
      const height = element.offsetHeight * 2;
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height);
      pdf.save(`Certificate-${certData.certificateNumber}.pdf`);
      
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setDownloading(false);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "Check out my new certificate from RVS College!";
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(currentUrl)}`
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">Download Your Certificate</h1>
        
        <div className="card-3d overflow-hidden mt-12 mb-20 max-w-2xl mx-auto">
          <div className="bg-primary/5 px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Find Your Certificate</h2>
          </div>
          
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Admission Number</label>
                <input type="text" name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} required className="input-3d" placeholder="Enter your admission number" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="input-3d" />
              </div>
              
              <div className="mt-4">
                <button type="submit" disabled={loading} className="btn-3d w-full py-4 rounded-xl text-lg flex justify-center items-center">
                  {loading ? 'Fetching...' : 'Fetch Certificate'}
                </button>
              </div>
            </form>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">{error}</div>}

            {certData && (
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certificate Preview</h3>
                
                {/* The Certificate Element we will capture for the PDF */}
                <CertificateDesign certData={certData} ref={certificateRef} />
                
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <button 
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="btn-3d px-10 py-4 rounded-xl text-lg flex items-center justify-center gap-3 w-full md:w-auto"
                  >
                    {downloading ? 'Generating PDF...' : 'Download PDF Document'}
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700">Share on:</span>
                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-bold px-3 py-1 bg-blue-50 rounded inline-block">LinkedIn</a>
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 font-bold px-3 py-1 bg-sky-50 rounded inline-block">Twitter</a>
                    <a href={shareLinks.email} className="text-gray-600 hover:text-gray-900 font-bold px-3 py-1 bg-gray-200 rounded inline-block">Email</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadCertificate;
