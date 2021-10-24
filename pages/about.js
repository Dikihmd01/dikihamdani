import Link from "next/link"
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-lg lg:text-4xl">Diki Hamdani</h2>
      </div>

      <div className="sm:px-32 px-10 md:px-28 lg:px-96 py-10 text-left">
        <p className="mb-4">
          Hello! I am Diki Hamdani, a computer science’s student who loves technology, mostly in web development.
          I lives in Tasikmalaya, West Java, Indonesia. I study at STMIK
          Tasikmalaya since 2019.
        </p>
        <p className="mb-4">
          I interested in Back-end stuff, but currently I also learn one of popular React.Js Framework, <Link href="nextjs.org"><a>Next.Js</a></Link>.
          I am kind of active student, joint Computer Club STMIK Tasikmlaya since 2019 and trusted as Lead of Software Engineer at Computer Club.
        </p>
        <p className="mb-4">
          <h3 className="text-xl font-bold">What I Use?</h3>
          <ul className="list-disc list-inside bg-rose-200 ...">
            <li>HTML & CSS</li>
            {/* <li>JavaScript</li> */}
            <li>PHP</li>
            <li>SQL</li>
            <li>CodeIgniter</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>Django</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Next.Js</li>
          </ul>
        </p>

        <div className="mt-12 hover:text-blue-700">
          <Link href="/">
            <a>&#8592; Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
