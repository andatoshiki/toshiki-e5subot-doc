import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/markdown.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import Link from "next/link";
import {FaRobot} from "react-icons/fa";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className="min-h-full flex flex-col dark:bg-gray-900 dark:text-white">
            <Head>
                <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}/>
                <meta name="keywords" content={process.env.NEXT_PUBLIC_SITE_KEY_WORLDS}/>
                <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_TITLE}/>
                <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_TITLE}/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL}/>
                <meta property="og:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}/>
                <meta property="og:locale" content="zh_CN" />
                <meta property="og:type" content="website" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="white"/>
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827"/>
                <link rel="stylesheet" href="https://jsd.toshiki.dev/npm/github-markdown-css@5.0.0/github-markdown.css"
                      integrity="sha256-PLbL/8eND+Kx0QQPimNGDZ+dyxlcj02iFGC6HTdvPZ8=" crossOrigin="anonymous"
                      referrerPolicy="no-referrer"/>
                <link rel="stylesheet" href="https://jsd.toshiki.dev/npm/katex@0.13.18/dist/katex.min.css"
                      integrity="sha256-M6KFoDq9eUpmogkDgw6+3R3ZgUPSuFXnQyr8tskSfQs=" crossOrigin="anonymous"
                      referrerPolicy="no-referrer"/>
            </Head>
            <header className="border-b dark:border-gray-700">
                <div className="container m-auto p-4 max-w-screen-md flex justify-between">
                    <div className="flex items-center space-x-2">
                        <FaRobot size="24"/>
                        <span className="text-xl font-bold">俊樹のE5subot</span>
                    </div>
                    <ul className="flex items-center space-x-4 font-bold text-blue-500">
                        <li>
                            <Link href="https://github.com/andatoshiki/toshiki-e5subot">
                                <a target="_blank" rel="noreferrer">GitHub</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="flex-1">
                <Component {...pageProps} />
            </main>
            <footer className="border-t dark:border-gray-700">
                <div className="container m-auto p-4 max-w-screen-md space-y-2">
                    <div>
                        Made with <span className="text-red-500">❤️</span> by <Link
                        href="https://www.toshiki.dev"><a target="_blank" rel="noreferrer"
                                                              className="text-blue-500 hover:underline">安田俊樹</a></Link>
                    </div>
                    <div>
                        <Link href="https://github.com/andatoshiki/toshiki-e5subot-doc/edit/master/posts/index.mdx">
                            <a target="_blank" rel="noreferrer" className="text-blue-500">编辑内容</a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MyApp;
