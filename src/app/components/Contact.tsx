const  Contact = () => {
    return(
        <div id="Contact">
            <div className="bg-slate-950">
         <div className="lg:w-1/3 md:w-1/2  lg:ml-96  w-full md:py-8 mt-8 md:mt-0"> 
  <h2 className="text-cyan-500 text-lg mb-1 font-medium title-font">
  We Value Your Feedback!
  </h2>
  <p className="leading-relaxed mb-5 text-gray-200">
  Your thoughts and opinions are essential to making this blog a valuable resource for everyone interested in Machine Learning and Deep Learning.
  </p>
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-cyan-500">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-cyan-500">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-cyan-500">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      defaultValue={""}
    />
  </div>
  <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg shadow-lg hover:shadow-cyan-500">
    Submit
  </button>
  <p className="text-xs text-gray-300 mt-3">
  Thank you for being a part of this community!
  </p>
</div>
</div>
</div>
    )
}

export default Contact