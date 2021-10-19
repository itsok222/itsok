import Head from "next/head";
import Image from "next/image";
import emailImg from "../public/assets/email.png";

export default function Home() {
  return (
    <div className="flex mt-64">
      <Head>
        <title>Its OK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center m-0-auto p-14">
        <div className="text-6xl font-medium">
          <div className="p-32 border-4 rounded-3xl">
            <div>Its OK</div>
            <div className="mt-12 ">
              <div>
                <Image src={emailImg} alt="email logo" width={32} height={32} />
              </div>
              <div className="text-xl">itsokappcare@gmail.com</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
