import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/profil.png";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={190}
          height={200}
        />
      </div>

      <div className="flex items-center justify-center">
        <h2 className="font-bold text-lg lg:text-4xl">Blog</h2>
      </div>

      <div className="flex items-center justify-center">
        <p>I share everything i know about programming and</p>
      </div>
      <div className="flex items-center justify-center">
        <p>technology through this app.</p>
      </div>

      <div class="sm:px-32 px-10 md:px-28 lg:px-96 py-10">
        <div class=" w-full lg:max-w-full lg:flex mb-4">
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:bg-gray-100">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                Getting know more HTML Atributes
              </div>
              <div class="flex items-center mb-2">
                <div class="text-sm">
                  <p class="text-gray-600">August, 16 2021</p>
                </div>
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div class=" w-full lg:max-w-full lg:flex mb-4">
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:bg-gray-100">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                introduction to HTML
              </div>
              <div class="flex items-center mb-2">
                <div class="text-sm">
                  <p class="text-gray-600">August, 16 2021</p>
                </div>
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div class=" w-full lg:max-w-full lg:flex mb-4">
          <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:bg-gray-100">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                Basic of HTML's Tags
              </div>
              <div class="flex items-center mb-2">
                <div class="text-sm">
                  <p class="text-gray-600">August, 16 2021</p>
                </div>
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 hover:text-blue-700">
          <Link href="/">
            <a>&#8592; Back to home</a>
          </Link>
        </div>
      </div>

      <footer className="flex items-center justify-center mt-14">
        <h2 className="font-bold text-sm lg:text-lg mb-7">
          Code with &#10084; by Diki Hamdani &copy; 2021
        </h2>
      </footer>
    </>
  );
}
