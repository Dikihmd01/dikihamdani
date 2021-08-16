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
        <h2 className="font-bold text-lg lg:text-4xl">
          Hey there! It's Diki here
        </h2>
      </div>

      <div class="sm:px-32 px-10 md:px-28 lg:px-32 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-8">
        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">
              <Link href="/about">
                <a>About Me</a>
              </Link>
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">Works</div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">Bookmarks</div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">
              <Link href="https://twitter.com/Dikihdn127001">
                <a target="_blank">Twitter</a>
              </Link>
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">Telegram</div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">
              <Link href="https://www.linkedin.com/in/dikihamdani/">
                <a target="_blank">Linkedin</a>
              </Link>
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
          <div class="px-6 py-12">
            <div class="font-bold text-xl mb-2 text-center">
              <Link href="https://github.com/Dikihmd01">
                <a target="_blank">Github</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center">
        <h2 className="font-bold text-sm lg:text-lg mb-7">
          Code with &#10084; by Diki Hamdani &copy; 2021
        </h2>
      </footer>
    </>
  );
}
