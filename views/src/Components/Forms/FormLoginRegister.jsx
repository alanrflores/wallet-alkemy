import React, { useState, useEffect } from "react";
import FormItem from "./components/FormItem";
import { useAuth } from "../../hooks/useAuth";
import { inputLogin, inputSchema } from "./components/validateSchema";
import { Form, Formik } from "formik";
import { createUser } from "../../redux/features/users/usersGetSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { inputValues } from "./components/inputValues";
import image from "../../assets/wallet.png";
const FormLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = (values, actions) => {
    // logica para consumir los endpoints register y login
    if (isLogin) {
      auth
        .signIn(values.email, values.password)
        .then((data)=> console.log(data))
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch(createUser(values));
    }

    actions.resetForm();
  };

  return (
    <section className="flex items-center justify-center bg-gray-100 gradient-form lg:py-16">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block border bg-white shadow-lg rounded-lg px-6 py-16">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                      }}
                      validationSchema={isLogin ? inputLogin : inputSchema}
                      onSubmit={onSubmit}
                    >
                      {(props) => (
                        <Form>
                          <h3 className="mb-5 text-2xl font-bold text-center">
                            {isLogin
                              ? "Please login to your account"
                              : "Please enter your personal data"}
                          </h3>
                          {inputValues.map((input, idx) =>
                            isLogin &&
                            (input.name === "firstName" ||
                              input.name === "lastName") ? null : (
                              <div className="mb-4" key={idx}>
                                <FormItem
                                  classLabel="block mt-3"
                                  classInput="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  type={input.type}
                                  name={input.name}
                                  placeholder={input.placeholder}
                                />
                              </div>
                            )
                          )}
                          <div className="text-center pt-1 mb-12 pb-1">
                            <button
                              type="submit"
                              disabled={props.isSubmitting}
                              className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              {isLogin ? "Login" : "Register"}
                            </button>
                          </div>
                          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center pb-6">
                            <p>
                              {isLogin
                                ? "Don't have an account? "
                                : "Already have an account "}
                            </p>
                            <button
                              type="button"
                              onClick={toggleLogin}
                              className="inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              {isLogin ? " Register" : " Login"}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className=" px-4 py-6 md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto w-48" src={image} alt="logo" />
                      <h4 className="text-2xl font-semibold mt-1 mb-12 pb-1">
                        Alkemy Wallet
                      </h4>
                    </div>
                    <p className="text-lg">
                      The virtual wallet that connects your money with
                      everything what you want. Your 100% digital accounts and
                      cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLoginRegister;
