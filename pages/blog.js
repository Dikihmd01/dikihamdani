import Link from "next/link";
import Layout from "../components/layout";
import Head from 'next/head'
import { getSortedPostData } from "../lib/posts"
import Date from "../components/date";

export default function Blog({ allPostData }) {
  return (
    <Layout>
      <Head>
        <title>Diki Hamdani - Blog</title>
      </Head>

      <div className="flex items-center justify-center">
        <h2 className="font-bold text-lg lg:text-4xl">Blog</h2>
      </div>

      <div className="flex items-center justify-center">
        <p className="italic">I share everything i know here, enjoy.</p>
      </div>

      <div className="sm:px-32 px-10 md:px-28 lg:px-60 py-10 text-left">
        {allPostData.map(({ id, title, date, description }) => (
          <div className=" w-full lg:max-w-full lg:flex mb-4" key={id}>
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:bg-gray-100">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <div className="text-sm">
                    <p className="text-gray-600">
                      <Date dateString={date} />
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 hover:text-blue-700">
          <Link href="/">
            <a>&#8592; Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostData()
  return {
    props: {
      allPostData
    }
  }
}
