import React, {useState, useEffect} from "react";
import tmdb from "../api/tmdb";
import Poster from "../components/Poster/Poster.component.js";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component.js";
const Plays = () => {

   const [nowPlaying , setNowPlaying] = useState([]);

   useEffect( () => {
      const requestNowPlaying = async () => {
         const getNowPlaying = await tmdb.get("/movie/now_playing");
         setNowPlaying(getNowPlaying.data.results);
      }
      requestNowPlaying();
   },[]);

   console.log(nowPlaying);


return (
<>
<div className="container mx-auto px-4 py-16">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
      <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
      <div className="flex flex-wrap">
      <div className="container mx-auto">
        <PosterSlider
        images={nowPlaying}
        isDark={false}
        />
      </div>
         {/* <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src={nowPlaying}
               title="Chakravyuh featuring Nitish Bharadwaj as..."
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360216-walsncbknh-portrait.jpg"
               title="The F word"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361238-cgyrctfqkp-portrait.jpg"
               title="I am from Delhi(Bihar)"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343787-ywkycduujz-portrait.jpg"
               title="Tansen"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357799-vfegxnntfv-portrait.jpg"
               title="Chakravyuh featuring Nitish Bharadwaj as..."
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360216-walsncbknh-portrait.jpg"
               title="The F word"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361238-cgyrctfqkp-portrait.jpg"
               title="I am from Delhi(Bihar)"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343787-ywkycduujz-portrait.jpg"
               title="Tansen"
               subtitle="Tamil ₹300"
               />
         </div> */}
      </div>
      </div>

       <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="grid gap-y-4">
            <div className="bg-gray-100 w-80 h-auto p-2"><PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/></div>
            <div className="bg-gray-100 w-80 h-auto p-2"><PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/></div>
            <div className="bg-gray-100 w-80 h-auto p-2"><PlaysFilter title="Categories" tags={["Theatre"]}/></div>
        
        
        </div>
       </div>
   </div>
</div>
</>
)
};
export default Plays;