import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-cyan-700"
          src="/images/author1.png"
          alt="author image"
          width={500}
          height={100}
        />

        <div>
          <h3 className="text-xl font-bold">Olivia</h3>
          <p className="text-slate-500">
            {" "}
            Olivia is a software engineer with a passion for JavaScript and
            functional programming{" "}
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Hi, I am Olivia! Join me as I explore the world. Olivia is an avid
        traveler and lifestyle blogger who shares her adventures and tips. This
        is my second blog post!
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300  hover:shadow-cyan-600 shadow-lg"
        >
          Twitter
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300 hover:shadow-cyan-600 shadow-lg"
        >
          Linkedin
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300 hover:shadow-cyan-600 shadow-lg"
        >
          Github
        </a>
      </div>
    </div>
  );
}
