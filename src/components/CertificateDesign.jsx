import React, { forwardRef } from 'react';

const CertificateDesign = forwardRef(({ certData }, ref) => {
  if (!certData) return null;

  return (
    <div 
      ref={ref}
      className="relative w-full max-w-4xl mx-auto aspect-[1.414/1] bg-white overflow-hidden flex flex-col justify-between shadow-2xl p-4"
    >
      {/* Outer Border */}
      <div className="absolute inset-4 border-[16px] border-[#0f172a] pointer-events-none z-10"></div>
      
      {/* Inner Border */}
      <div className="absolute inset-[32px] border-[1px] border-[#d4af37] pointer-events-none z-10"></div>
      <div className="absolute inset-[36px] border-[3px] border-[#d4af37] pointer-events-none z-10"></div>

      {/* Background Watermark - Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <img 
          src="/images/logo.png" 
          alt="RVSCET Watermark" 
          className="w-1/2 opacity-5 grayscale" 
          crossOrigin="anonymous" 
        />
      </div>

      {/* Content Area */}
      <div className="relative z-20 h-full flex flex-col pt-12 pb-10 px-16 text-center text-gray-900 bg-white/40">
        
        {/* Header Grid: Reg No | Logo | Cert No */}
        <div className="grid grid-cols-3 items-center w-full mb-8">
          <div className="text-left pl-4">
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Serial Number</p>
             <p className="text-sm font-mono text-gray-800">{certData.certificateNumber}</p>
          </div>
          
          <div className="flex justify-center">
             <img src="/images/logo.png" alt="RVS College Logo" className="h-24 drop-shadow-sm" crossOrigin="anonymous" />
          </div>
          
          <div className="text-right pr-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Admission Ref.</p>
            <p className="text-sm font-mono text-gray-800">{certData.admissionNumber}</p>
          </div>
        </div>

        {/* Institution Name */}
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-widest uppercase mt-2 mb-1" style={{ fontFamily: "Cinzel, Georgia, serif" }}>
          R.V.S. College
        </h1>
        <h2 className="text-sm tracking-[0.4em] text-[#d4af37] font-bold uppercase mb-12">
          of Engineering & Technology
        </h2>
        
        {/* Title */}
        <h3 className="text-5xl text-[#0f172a] mb-10" style={{ fontFamily: "Playfair Display, Times New Roman, serif" }}>
          Certificate of Completion
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-6">
          This is to certify that
        </p>
        
        {/* Student Name */}
        <p className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 border-b border-gray-300 inline-block px-12 pb-3" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
          {certData.fullName}
        </p>
        
        {/* Course Info */}
        <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed px-8 mb-4">
          has successfully fulfilled the academic requirements and completed the prescribed program of study in
        </p>
        
        <p className="text-2xl font-bold text-[#0f172a] uppercase tracking-wide mb-auto">
          {certData.course}
        </p>

        {/* Footer Area: Date | Seal | Signature */}
        <div className="w-full flex justify-between items-end px-8 mt-12">
          
          {/* Date Block */}
          <div className="w-1/3 flex flex-col items-start pb-4">
             <p className="text-sm font-bold text-gray-800 mb-1">{new Date(certData.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
             <div className="border-t border-[#0f172a] w-32 pt-2">
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Date of Issue</p>
             </div>
          </div>

          {/* Central Seal */}
          <div className="w-1/3 flex justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] bg-[#f8f9fa] flex items-center justify-center p-1 shadow-inner relative">
              <div className="w-full h-full rounded-full border border-dashed border-[#d4af37] flex flex-col items-center justify-center text-[#d4af37]">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                <span className="text-[8px] font-bold tracking-widest uppercase">Certified</span>
              </div>
            </div>
          </div>

          {/* Signature Block */}
          <div className="w-1/3 flex flex-col items-end pb-4">
             <div className="border-b border-[#0f172a] w-48 mb-2 h-10 flex items-end justify-center">
                 <span className="opacity-80 text-2xl text-[#0f172a]" style={{ fontFamily: "Allura, 'Brush Script MT', cursive" }}>Prof. RVS Director</span>
             </div>
             <p className="text-[10px] font-bold text-gray-800 uppercase tracking-wider text-center w-48">Principal / Director</p>
          </div>
          
        </div>
      </div>
    </div>
  );
});

export default CertificateDesign;
