import React from "react";

const index = () => {
  return (
    <section
      id="alamat"
      className="relative bg- top-10 px-24 py-24 max-md:px-12 max-sm:px-8"
    >
      <div className="flex flex-col justify-around items-center max-md:flex-col max-md:justify-center">
        <h1 className="text-center text-4xl font-bold">Mitra Rumoh DM</h1>
        <p className="text-center">Kami bekerjasama dengan beberapa para ahli:</p>
        <div className="flex p-4 items-center justify-evenly w-3/4 max-sm:flex-wrap gap-y-8">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-1">
              <img
                width="120"
                height="120"
                src="https://img.icons8.com/material-sharp/96/18181b/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>
            <p className="font-medium">dr. blabla</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-1">
              <img
                width="120"
                height="120"
                src="https://img.icons8.com/material-sharp/96/18181b/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>
            <p className="font-medium">dr. blabla</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-1">
              <img
                width="120"
                height="120"
                src="https://img.icons8.com/material-sharp/96/18181b/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>
            <p className="font-medium">dr. blabla</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
