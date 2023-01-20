import './App.css';
import SideBar from './SideBar';
function App() {
  return (
    <div className="flex">
      <section className="w-full h-screen flex items-center justify-center">
        <div className="card-project">
          <img class="w-full h-full object-cover rounded-sm" src="illuvium.jpg" alt="illuvium" >
          </img>

          <div className="p-5 flex bg-gradient-to-bl from-zinc-600 via-zinc-300 to-neutral-900 flex-col gap-3">
            <div className="flex  items-center gap-2">
              <span className="badge bg-green-500">Review</span>
              <span className="badge bg-gradient-to-tr from-blue-800 to-blue-400 rounded-full">Dig</span>
              <span className="badge bg-gradient-to-tr from-blue-800 to-blue-400 rounded-full">Parteners</span>
            </div>


            <div className="flex  justify-center items-center gap-2">
              <span className="text-2xl" >17 / 20</span>
              <img src="illuvium_logo.png" alt="illuvium_logo" height="80" width="80">
              </img>
              <img className="" src="arrow.png" alt="illuvium_logo" height="60" width="60">
              </img>
            </div>
            <button className="product-title" title="Description project">
              Illuvium
            </button >
          </div>
        </div>
        <a href="#_" className="relative bg-green-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
          <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-green-700 left-0 top-0"></span>
          <span className="relative"> button text</span>
        </a>
        <a href="#_" className="relative bg-pink-300 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
          <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24  transition-all ease-out duration-1000 bg-gradient-to-b from-violet-300 to-violet-700 left-0 top-0"></span>

          <span className="relative text-white "> button text</span>
        </a>
        <a href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer bg-pink-300 text-white">
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span class="relative">Button Text</span>
        </a>
      </section>
      <SideBar />
    </div>
  )
}

export default App;
