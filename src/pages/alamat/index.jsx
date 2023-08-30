import React from "react";

const index = () => {
  return (
    <section
      id="alamat"
      className="relative bg-green-500 top-14 px-24 py-24 max-md:px-12 max-sm:px-8"
    >
      <div className="flex justify-around items-center max-md:flex-col max-md:justify-center">
        <div className="w-[50%] max-md:w-full">
          <h1 className="font-bold text-5xl text-white max-md:text-4xl uppercase">
            Lorem ipsum dolor.
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            reprehenderit eligendi totam excepturi, at officia cumque fugiat
            necessitatibus illo corrupti, odio ducimus quidem quibusdam
            exercitationem voluptatum harum et! Ad dolorem eveniet unde
            distinctio ducimus cum fugiat dolores assumenda sint, ullam veniam,
            placeat quia nemo expedita aperiam exercitationem id temporibus sed.
          </p>
        </div>
        <div className="max-md:-order-1 max-md:mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4075411.350723844!2d94.00558228943179!3d4.0420694498956085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30399bdf507cc4bd%3A0x1039d80b220ca60!2sAceh!5e0!3m2!1sid!2sid!4v1693405078653!5m2!1sid!2sid"
            width="300"
            height="300"
            className="border-none rounded-lg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default index;
