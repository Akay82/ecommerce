
import Layout from "../../components/layout/Layout";

const ContactUs = () => {
   
  return (
    <Layout> 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">Contact Us</h2>
        <form  action="https://formspree.io/f/mnnajwel"
  method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};



export default ContactUs;
