
import datas from '../datas/homepagedata.json'
import BackgroundAnimation from "./BgAnim";

export default function Present() {
    return (
        <div className="flex flex-row justify-center items-start overflow-hidden">
        {/* Text container */}
  
        <div className="grid-cols-2">
          <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-40 ml-20">
            <div className="w-3/4 ml-10">
              <img
                src={"/tadao.jpg"}
                alt="avatar"
                className=" shadow rounded-full justify-center ml-2"
              />
              <div className="flex flex-row justify-between mt-4 ml-5">
                <div className="flex flex-row space-x-4  text-stone-50">
                  <h1 className="font-mono text-lg">Tadao Ando</h1>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
        <BackgroundAnimation />
        {/* Image container */}
      </div>
    )
}