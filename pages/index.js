import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Its OK</title>
        <meta
          property="og:title"
          content="Gamify.Design | Build Epic Products with Game Design"
          key="title"
        />
      </Head>

      <div className="container pb-4 m-auto overflow-hidden sm:mt-8 sm:main-fixed-size">
        <div className="container m-auto overflow-hidden sm:main-fixed-size ">
          <div className="flex justify-between p-4 mx-4 mt-4 sm:mx-0 rounded-xl">
            <div>
              <div className="text-xl font-bold ">Its OK ❤️</div>
            </div>

            <div>
              <div className="text-blue-500">
                <div title="Build Epic Products with Gameful Design">
                  Join the team
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:mx-0">
          <div className="mx-4 mt-8 sm:mt-24">
            <div className=" m-0-auto">
              <div className="text-4xl font-medium leading-tight text-left sm:text-6xl sm:text-center">
                <span className="block sm:hidden">
                  {" "}
                  Talk with US to Confront your challenges{" "}
                </span>{" "}
                <span className="hidden mx-2 leading-tight sm:block">
                  {" "}
                  Talk with US to
                </span>{" "}
                <div className="mt-10 sm:mt-0"></div>
                <span className="hidden font-bold sm:px-4 sm:block">
                  Confront your challenges
                </span>
              </div>
              <div className="-mt-8 text-xl sm:mt-4 sm:text-center sm:text-2xl">
                We are on a mission to provide safe ,easy and asscessible online
                therapy anytime ,anywhere and help you take care of your
                emotional struggles under expert guidance
              </div>

              <div className="mt-4 sm:mt-12">
                <div id="revue-embed">
                  <form
                    action=""
                    method="post"
                    id="revue-form"
                    name="revue-form"
                    target="_blank"
                  >
                    <div
                      data-element="fields"
                      data-stacked="false"
                      className="justify-center lg:flex seva-fields formkit-fields"
                    >
                      <div className="revue-form-group ">
                        <input
                          className="revue-form-field"
                          placeholder="Get next gameful design article"
                          required
                          className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none lg:width-45 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                          type="email"
                          name="member[email]"
                          id="member_email"
                        />
                      </div>

                      <div className="revue-form-actions">
                        <input
                          type="submit"
                          name="member[subscribe]"
                          id="member_submit"
                          value="Talk to US ❤️"
                          className="relative block w-full px-6 py-3 mt-4 text-lg font-semibold leading-snug transition duration-150 ease-in-out bg-yellow-200 border border-transparent rounded-md shadow-md cursor-pointer lg:mt-0 lg:h-auto lg:ml-4 lg:w-auto"
                        />
                      </div>
                    </div>
                    <div className="mt-2 text-center text-gray-500">
                      First 50 members get first session free
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        {/* The Future */}
      </div>
    </div>
  );
}
