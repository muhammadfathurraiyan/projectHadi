import React from "react";

const index = () => {
  return (
    <section
      id="beranda"
      className="relative bg-green-50 top-14 px-24 max-md:px-12 max-sm:px-8 flex flex-col items-center justify-center h-screen"
    >
      {/* bg-[url(https://picsum.photos/300)] bottom-0 bg-cover bg-center bg-no-repeat */}
      {/* <h1 className="text-3xl font-bold text-center uppercase mb-20">Tentang Kami</h1> */}
      <div className="flex justify-around items-center max-md:flex-col max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl text-green-500 max-md:text-4xl uppercase">
            Lorem ipsum dolor.
          </h1>
          <p className=" mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            reprehenderit eligendi totam excepturi, at officia cumque fugiat
            necessitatibus illo corrupti, odio ducimus quidem quibusdam
            exercitationem voluptatum harum et! Ad dolorem eveniet unde
            distinctio ducimus cum fugiat dolores assumenda sint, ullam veniam,
            placeat quia nemo expedita aperiam exercitationem id temporibus sed.
          </p>
        </div>
        <div className="-order-1 max-md:mb-4">
          <img
            className="rounded-xl"
            src="https://picsum.photos/300"
            alt="dummyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
