import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block">Contact details</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="font-semibold">College :</span> 7033000777</li>
              <li><span className="font-semibold">Placement :</span> 9110969068</li>
              <li><span className="font-semibold">Principal :</span> 07033000777</li>
              <li><span className="font-semibold">E-mail :</span> <a href="mailto:info@rvscet.com" className="hover:text-primary transition-colors">info@rvscet.com</a></li>
              <li><span className="font-semibold">E-mail :</span> <a href="mailto:rvscet@gmail.com" className="hover:text-primary transition-colors">rvscet@gmail.com</a></li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold">Address :</h4>
              <p className="text-sm text-gray-300">Edalbera, P.O. :Bhilai Pahari, NH-33, Jamshedpur, Jharkhand, (INDIA)</p>
            </div>
          </div>

          {/* City Address */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block">City Address</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="font-semibold">College :</span> 2435127</li>
              <li><span className="font-semibold">Phone :</span> 0657-2431872</li>
              <li><span className="font-semibold">Fax :</span> 0657- 2435439</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold">Address :</h4>
              <p className="text-sm text-gray-300">R.V.S.C.E.T, Binda Apartments, Mills Area, Behind Basant Cinema, Sakchi, Jamshedpur-831001</p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-primary transition-colors">Approval Letters</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">AICTE Recommended Books for Engg Programmes</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">ARIIA 2022 Report</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Financial Statements</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Higher Education Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">HR Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">IQAC</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">RVS Virtual Tour</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Mandatory Disclosure</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Non – Statutory committees</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">RTI</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Statutory committees</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Undertaking</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-primary transition-colors">AICTE – Feedback</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Apply for WES/ Transcript & Student Verification / Genuineness</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Anti-Ragging</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Grievance Redressal Portal</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Internal Complaints and Women Empowerment Committee</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Smartapp</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Downloads</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Fees Payment</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Alumni</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Professional Chapters</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block">Academics</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:text-primary transition-colors">Academic Regulations</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Academic Calendar</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Annual Report</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">COE Corner</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Learning Augmented</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Strategic Plan</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">ERP</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>RVS college - &copy; 2023 All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Term Of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
          <p className="mt-4 md:mt-0">Made with &hearts; by Sauban Adil Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
