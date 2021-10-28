import Head from "next/head";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Its OK</title>
        <meta property="og:title" content="Its OK | Thank you" key="title" />
      </Head>

      <div className="h-screen p-4 sm:p-24 brand-bg-green center-div">
        <div className="content-center p-4 mx-8 mt-12 text-xl text-center bg-white rounded-md sm:p-24 sm:mt-4 sm:text-2xl">
          <div>Thanks for reaching out to us!</div>
          <div>Someone from team will reach out to you within 24 hours.</div>
        </div>
      </div>
    </div>
  );
}
