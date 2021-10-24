import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/profil.png'
// import Link from 'next/link'

export default function Layout({children}) {
    return (
        <html>
            <Head>
                <title>Diki Hamdani</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/profil.png" />
            </Head>
            <body>
                <div className="flex items-center justify-center">
                    <Image
                        src={profilePic}
                        alt="Picture of the author"
                        width={190}
                        height={200}
                    />
                </div>

                {children}

                <footer className="flex items-center justify-center">
                    <h2 className="font-bold text-sm lg:text-lg mb-7">
                    Code with &#10084; by Diki Hamdani &copy; 2021
                    </h2>
                </footer>
            </body>
        </html>
    )
}