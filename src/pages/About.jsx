import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">About RVS College</h1>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8 border border-gray-100 p-8">
          <img src="/images/bg.webp" alt="RVS College Campus" className="w-full h-64 object-cover rounded-xl mb-8 shadow-sm" />
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              R.V.S College of Engineering and Technology, Jamshedpur is established in 2004 with the objective of imparting quality engineering education. The college is set up by the RVS Educational Trust, Jamshedpur.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Our Vision</h2>
            <p>
              To be a center of excellence in education and research, producing global leaders in science, technology and management. To be an institution of global standing for making a significant contribution to nation building.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Our Mission</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide a conducive environment for holistic development.</li>
              <li>To offer quality education through innovative pedagogy.</li>
              <li>To foster industry-academia collaboration for practical exposure.</li>
              <li>To promote research, innovation, and entrepreneurship.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
