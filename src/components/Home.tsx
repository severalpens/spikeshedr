
// App.js
function Home() {
    return (
  <div>
    <div className="text-center mt-32 py-10 px-6">
      <h1 className="text-4xl font-bold mt-0 mb-6">Paul Collins</h1>
      <h3 className="text-2xl font-bold mb-4">IBM Data Engineer | Web Developer</h3>
    </div>
    {/* <div className="text-center flex">
      <a href="projects" style={{ width: "500px" }}  className="border max-w-md m-auto mb-4 py-2.5 px-6 text-white bg-gray-600 border-black rounded-md flex-grow">Projects</a>
    </div> */}
    <div className="text-center flex justify-center m-6">
      <a href="https://github.com/severalpens" className="border mx-6 px-6 py-2.5 border-black rounded-md">Github</a>
      <a href="https://www.youtube.com/channel/UCuFhL_mEedCp4FDpIrSS9gA" className="border mx-6 px-6 py-2.5 border-black rounded-md">Youtube</a>
      <a href="https://blue-beach-0c011c910.3.azurestaticapps.net/" className="border mx-6 px-6 py-2.5 border-black rounded-md">Blog</a>
      <a href="https://www.linkedin.com/in/paul-collins-541b2053/" className="border mx-6 px-6 py-2.5 border-black rounded-md">LinkedIn</a>
    </div>
  </div>
    );
  }
  

export default Home;