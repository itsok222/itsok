import Head from "next/head";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Its OK</title>
        <meta
          property="og:title"
          content="Its OK | Talk with US to Confront your challenges"
          key="title"
        />
      </Head>

      <div className="container pb-4 m-auto overflow-hidden sm:mt-8 sm:main-fixed-size">
        <div className="container m-auto overflow-hidden sm:main-fixed-size ">
          <div className="flex justify-between p-4 mx-4 mt-4 sm:mx-0 rounded-xl">
            <div>
              <div className="hidden -mt-16 text-xl font-bold sm:block">
                <Image
                  src="/assets/logo6.png"
                  alt="Picture of the author"
                  width={132}
                  height={132}
                />
              </div>
              <div className="-mt-6 text-xl font-bold sm:hidden">
                <Image
                  src="/assets/logo6.png"
                  alt="Picture of the author"
                  width={82}
                  height={82}
                />
              </div>
            </div>

            <div>
              <div className="font-bold text-black " style={{ color: "" }}>
                <div title="Join the team">
                  <a
                    href="https://www.notion.so/Its-OK-78078e933d0d4a3caaeb369c8dae6e66"
                    target="_blank"
                  >
                    Join the team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:mx-0">
          <div className="mx-4 mt-8 ">
            <div className=" m-0-auto">
              <div className="text-4xl font-medium leading-tight text-left sm:text-6xl sm:text-center">
                <span className="block font-bold sm:hidden brand-green">
                  {" "}
                  Confront Your Challenges
                </span>{" "}
                <div className="mt-10 sm:mt-0"></div>
                <span className="hidden font-bold sm:px-4 sm:block brand-green">
                  Confront Your Challenges
                </span>
              </div>
              <div className="-mt-8 text-xl sm:mt-4 sm:text-center sm:text-2xl">
                We are on a mission to provide safe ,easy and asscessible online
                therapy anytime ,anywhere and help you take care of your
                emotional struggles under expert guidance
              </div>

              <div className="mt-4 sm:mt-12">
                <form
                  id="sib-form"
                  method="POST"
                  action="https://48bd664a.sibforms.com/serve/MUIEALiQbfsL8X_JeJO8kLw1w7fcxua53SNZ4OmyqbaTAlFI5VqN715aslNMqQeZ0INXfAhSiivXsSQU2hC5yKGS4jjRX2isS3ZxwRgfyrr5P-yGGBE_GSH4WwSHRqkbJpgarEDGPjWK3ah-GzCtn8a67AM-8QoNMQ5wVCpspve-Iwfz47YtILM-QLxxmNikpFfGc-Z9YJgpdWiI"
                  data-type="subscription"
                >
                  <div style={{ padding: "8px 0" }}>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row ">
                          <div className="entry__field">
                            <input
                              className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto lg:width-45 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                              type="text"
                              id="EMAIL"
                              name="EMAIL"
                              autoComplete="off"
                              placeholder="Write your email ID"
                              data-required="true"
                              required
                            />
                          </div>
                        </div>
                        <label
                          className="entry__error entry__error--primary"
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            fontFamily: '"Helvetica", sans-serif',
                            color: "#661d1d",
                            backgroundColor: "#ffeded",
                            borderRadius: "3px",
                            borderColor: "#ff4949",
                          }}
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "8px 0" }}>
                    <div className="sib-sms-field sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row ">
                          <div className="sib-sms-input-wrapper">
                            <div
                              className="sib-sms-input"
                              data-placeholder="XX XXX XXX XX"
                              data-required
                              data-country-code="IN"
                              data-value
                            >
                              <div
                                className="entry__field"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="tel"
                                  className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto lg:width-45 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                                  id="SMS"
                                  name="SMS"
                                  autoComplete="off"
                                  placeholder="Type your phone number"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label
                          className="entry__error entry__error--primary"
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            fontFamily: '"Helvetica", sans-serif',
                            color: "#661d1d",
                            backgroundColor: "#ffeded",
                            borderRadius: "3px",
                            borderColor: "#ff4949",
                          }}
                        ></label>
                        <label
                          className="entry__error entry__error--secondary"
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            fontFamily: '"Helvetica", sans-serif',
                            color: "#661d1d",
                            backgroundColor: "#ffeded",
                            borderRadius: "3px",
                            borderColor: "#ff4949",
                          }}
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "8px 0" }}>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row ">
                          <div className="entry__field ">
                            <textarea
                              rows={2}
                              className="input"
                              maxLength={5000}
                              id="FIRSTNAME"
                              name="FIRSTNAME"
                              autoComplete="off"
                              placeholder="What issue are you facing?"
                              data-required="true"
                              required
                              defaultValue={""}
                              className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto lg:width-45 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                            />
                          </div>
                        </div>
                        <label
                          className="entry__error entry__error--primary"
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            fontFamily: '"Helvetica", sans-serif',
                            color: "#661d1d",
                            backgroundColor: "#ffeded",
                            borderRadius: "3px",
                            borderColor: "#ff4949",
                          }}
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "8px 0" }}>
                    <div
                      className="sib-form-block"
                      style={{ textAlign: "left" }}
                    >
                      <button
                        className="relative block px-6 py-3 mt-4 text-lg font-semibold leading-snug transition duration-150 ease-in-out bg-yellow-200 border border-transparent rounded-md shadow-md cursor-pointer w-44 margin-0-auto "
                        form="sib-form"
                        type="submit"
                        value="Talk to US ❤️"
                      >
                        Talk to US ❤️
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "8px 0" }}>
                    <div
                      className="sib-form-block margin-0-auto"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: '"Helvetica", sans-serif',
                        color: "#3C4858",
                        backgroundColor: "transparent",
                      }}
                    ></div>
                  </div>
                  <div className="mt-2 text-center text-gray-500">
                    First 50 members get first session free
                  </div>

                  <input type="hidden" name="locale" defaultValue="en" />
                </form>
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
