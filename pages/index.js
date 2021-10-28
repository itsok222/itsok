import Head from "next/head";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Its OK</title>
        <meta
          property="og:title"
          content="Its OK | Your Time to Heal"
          key="title"
        />

        <script src="https://sibforms.com/forms/end-form/build/main.js"></script>
      </Head>

      <div className="container pb-4 m-auto overflow-hidden sm:mt-8 sm:main-fixed-size">
        <div className="container m-auto overflow-hidden sm:main-fixed-size ">
          <div className="flex justify-between p-4 mx-4 mt-4 sm:mx-0 rounded-xl">
            <div>
              <div className="hidden -mt-16 text-xl font-bold sm:block">
                <Image
                  src="/assets/logo6.png"
                  alt="Picture of the author"
                  width={112}
                  height={112}
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
              <div
                className="font-bold text-black sm:-mt-4 "
                style={{ color: "" }}
              >
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
              <div className="text-4xl font-medium leading-tight text-center sm:text-6xl">
                <span className="block font-bold sm:hidden brand-green">
                  Your Time to Heal
                </span>
                <div className="mt-10 sm:mt-0"></div>
                <span className="hidden font-bold sm:px-4 sm:block brand-green">
                  Your Time to Heal
                </span>
              </div>
              <div className="-mt-8 text-xl text-center sm:mt-4 sm:text-2xl">
                We provide easy, safe, affordable and accessible online therapy
                with licensed therapists at fingertips. Are you facing a tough
                time and unsure how to overcome it?
              </div>
              <div className="mt-4 text-xl text-center sm:text-2xl">
                Its OK! Take the first step today
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
                          <div className="entry__field ">
                            <textarea
                              rows={2}
                              className="input"
                              maxLength={5000}
                              id="FIRSTNAME"
                              name="FIRSTNAME"
                              autoComplete="off"
                              placeholder="What are you going through?"
                              data-required="true"
                              required
                              defaultValue={""}
                              className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto sm:width-38 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
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
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row ">
                          <div className="w">
                            <input
                              className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto sm:width-38 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                              type="email"
                              id="EMAIL"
                              name="EMAIL"
                              autoComplete="off"
                              placeholder="Email ID"
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
                        <div className="form__label-row">
                          <div className="sib-sms-input-wrapper">
                            <div
                              className="sib-sms-input"
                              data-placeholder="XX XXX XXX XX"
                              data-value
                            >
                              <div
                                className="entry__field"
                                style={{ width: "100%" }}
                              >
                                <input
                                  type="tel"
                                  className="block w-full px-4 py-3 text-lg placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-none outline-none appearance-none margin-0-auto sm:width-38 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                                  id="SMS"
                                  name="SMS"
                                  autoComplete="off"
                                  placeholder="Phone number (Optional)"
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
                    <div
                      className="sib-form-block"
                      style={{ textAlign: "left" }}
                    >
                      <button
                        className="relative block px-6 py-3 mt-2 text-lg font-semibold leading-snug transition duration-150 ease-in-out border border-transparent rounded-md shadow-md cursor-pointer brand-bg-green w-44 margin-0-auto "
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
                  <div className="text-center text-gray-500 ">
                    You can also reach out to us at Care@itsOK.co.in or Whatsapp
                    at +91 93196 03693
                  </div>

                  <div className="flex justify-center mt-4">
                    <div className="mr-2">
                      <a
                        href="https://www.instagram.com/itsok_co/"
                        target="_blank"
                      >
                        <Image
                          src="/assets/insta.png"
                          alt="Picture of the author"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                    <div className="ml-2">
                      <a href="https://twitter.com/ItsOk_App" target="_blank">
                        <Image
                          src="/assets/twitter.png"
                          alt="Picture of the author"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
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
