import React from 'react';

    function App() {
      return (
        <div className="font-sans">
          <nav className="bg-gray-100 py-4 mb-8">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">ROGVERSE</h1>
              <ul className="flex space-x-6">
                <li><a href="#features" className="text-gray-700 hover:text-gray-900 font-semibold">Features</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold">Contact</a></li>
              </ul>
            </div>
          </nav>

          <section className="hero bg-gray-200 py-16 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4">Welcome to ROGVERSE</h2>
              <p className="text-lg text-gray-700">Your innovative startup solution.</p>
            </div>
          </section>

          <section id="features" className="features py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="feature bg-white p-6 border border-gray-300 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                  <p className="text-gray-700">Description of feature 1.</p>
                </div>
                <div className="feature bg-white p-6 border border-gray-300 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                  <p className="text-gray-700">Description of feature 2.</p>
                </div>
                <div className="feature bg-white p-6 border border-gray-300 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                  <p className="text-gray-700">Description of feature 3.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <form className="max-w-md mx-auto flex flex-col">
                <input type="text" placeholder="Your Name" className="mb-4 px-4 py-2 border border-gray-300 rounded-md" />
                <input type="email" placeholder="Your Email" className="mb-4 px-4 py-2 border border-gray-300 rounded-md" />
                <textarea placeholder="Your Message" className="mb-4 px-4 py-2 border border-gray-300 rounded-md"></textarea>
                <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">Send</button>
              </form>
            </div>
          </section>
        </div>
      );
    }

    export default App;
