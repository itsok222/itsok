import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import React from "react";
import { useForm } from "react-hook-form";

export const Form1 = () => {
  const { handleSubmit, register, errors } = useForm();

  const [currentEmail, setInput] = useState(""); // '' is the initial state value

  const [currentGDPR, setGDPR] = useState(false); // '' is the initial state value

  const [currentError, setError] = useState(""); // '' is the initial state value

  const [sent, setSucess] = useState(""); // '' is the initial state value
  const [thankYou, setThankyou] = useState("hidden"); // '' is the initial state value

  var bodyData = {
    listIds: [2],
    updateEnabled: false,
    email: currentEmail,
    attributes: {
      GDPR: currentGDPR,
    },
  };

  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      console.log("bs");
      setSucess("");
      setThankyou("hidden");
    };
  }, []);

  var options = {
    method: "POST",

    url: "https://api.sendinblue.com/v3/contacts",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify(bodyData),
  };

  function gdpr(e) {
    setGDPR(e.target.checked);
  }

  const onSubmit = (values) => {
    console.log("ss");
    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    //   var bbb = JSON.parse(body);
    //   setError(bbb["message"]);
    //   var res_code = response["statusCode"];
    //   if (res_code === 201) {
    //     setSucess("hidden");
    //     setThankyou("");
    //   }
    // });
  };
  return (
    <React.Fragment>
      <div class={thankYou}>
        <div class="p-2 my-12">
          <span class=" text-black text-lg sm:text-4xl"> Awesome!</span>
          <div class="text-center  text-black mt-8">
            Check your email to proceed further.{" "}
          </div>
        </div>
      </div>

      <div class={sent}>
        <div class="pt-3 md:p-12  pb-4 sm:pb-5 font-body">
          <div class=" ml-4 sm:mr-4 mt-8 sm:mt-12 ">
            <form
              id="sib-form"
              method="POST"
              action="https://48bd664a.sibforms.com/serve/MUIEAHA2-hctKmcK8oCHVM55rUP42GOjQvstnWJMqlDYz4kA20lHfVKzrIq_C3ODWUGmdt6o91-XNFM9u_HrTyR58lqbdps9Jz4p6qCUzJtVaw0pMe7kchMqQwOXEIZ7a4hYishC7iRKQvlSv96WAXDms52H9E321ly1Wda6JXV5szg1pzMsCySt618tqXVAH2gobdB7BS9qyvh-"
              data-type="subscription"
            >
              <Form.Group controlId="exampleForm.ControlInput3">
                <div class="mr-4">
                  <input
                    class="  mr-4  sm:h-12 w-full text-sm md:text-base rounded-lg shadow-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username1"
                    type="text"
                    placeholder="EmailID"
                    onInput={(e) => setInput(e.target.value)}
                    required="true"
                  />
                </div>

                <span id="emailError" class="text-red-700 text-xs">
                  {currentError}
                </span>
              </Form.Group>

              <div class="  mr-4    sm:mt-2  sm:mr-32">
                <button
                  // onClick={() => sendMail()}
                  class="brand-yellow-btn w-full sm:h-16 sm:text-xl "
                  form="sib-form"
                  type="submit"
                >
                  <span class=" sm:text-xl">Join Now</span>
                  <input type="submit" value="" class="" />
                </button>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};
