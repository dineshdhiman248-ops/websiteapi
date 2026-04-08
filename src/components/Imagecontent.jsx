import React from "react";
import WebImage from "../assets/hero.png";

function Imagecontent() {
    return (

        <section className="py-20">
     <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-10">
      
      <div className="w-full md:w-1/2">
         <img
              src={WebImage}  
              alt="Web Development"
              className="w-full h-64 md:h-96 object-cover transform group-hover:scale-110 transition duration-500"
            />
      </div>

      <div className="w-full md:w-1/2 text-left">
        In harum cupiditate dolore voluptatem occaecati sapiente repellat. Voluptatum exercitationem est ab vero qui. Iure harum qui et omnis. Et labore similique omnis nam omnis reiciendis voluptatem nesciunt. Temporibus inventore

      </div>

    </div>

  </div>
</section>

    );
}
export default Imagecontent;