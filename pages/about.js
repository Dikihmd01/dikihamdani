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
        <h2 className="font-bold text-lg lg:text-4xl">About Diki Hamdani</h2>
      </div>

      <div class="sm:px-32 px-10 md:px-28 lg:px-96 py-10 text-justify">
        <p className="mb-4">
          I am Diki Hamdani, a computer science’s student and also web developer
          who lives in Tasikmalaya, West Java, Indonesia. I am studying at STMIK
          Tasikmalaya since 2019.
        </p>
        <p className="mb-4">
          I really intersted in programming and techbology, currently learning
          more about Back-end stuffs like Python and Django and one of pouplar
          front-end framework, Next.Js.
        </p>
        <p>
          I am kind of active student, trusted as a vice lead softwae engineer
          at Computer Club STMIK Tasikmalaya since 2020. Also join as a member
          of Tasik Code. Find me on Twitter, Github, and e-mail.
        </p>

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
