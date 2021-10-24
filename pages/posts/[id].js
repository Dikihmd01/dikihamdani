import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({postData}) {
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="sm:px-32 px-10 md:px-28 lg:px-60 py-10 text-left">
                <h2 className="font-bold text-lg lg:text-4xl mb-1">{postData.title}</h2>
                <div className="mb-2">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />

                <div className="mt-12 hover:text-blue-700">
                    <Link href="/blog">
                        <a>&#8592; All blogs</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}