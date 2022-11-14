import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = () => {
   const user = useSelector((state) => state.users.usersList);
  const [isAnimating, setIsAnimating] = useState(false);

  const boxVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div className="">
      <div className="">
        <section className="flex px-6 justify-center py-24 md:px-5 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <div className="md:ml-10 mt-8">
              <motion.div
                variants={boxVariant}
                animate="visible"
                initial="hidden"
              >
                <h2 className="text-center md:text-left mb-4 mt-5 pt-4 md:mt-0 md:px-0 text-5xl lg:text-6xl font-semibold">
                  The virtual wallet <br /> that connects your money with
                  everything <br /> what you want.{" "}
                </h2>
                <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                  Your 100% digital accounts and cards.
                </p>
                <div className="flex justify-center lg:w-fit">
                  <Link to={user.length !== 0 ? '/dashboard' : '/login'} className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Start using WALLET
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={boxVariant}
              animate="visible"
              initial="hidden"
            >
              <div
                className="md:ml-10 md:max-w-[92%] transition-all"
                width="100%"
                height="auto"
              >
                <img
                  className="w-full rounded-full md:w-full"
                  src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2020/04/9550.jpg"
                  alt="logo"
                />
              </div>
            </motion.div>
          </div>
        </section>
        <section className="bg-teal-50 flex justify-center py-24 px-6 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <motion.div
              animate={{
                x: isAnimating ? 20 : 0,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0,
              }}
              initial={{
                opacity: 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
              onClick={() => setIsAnimating(!isAnimating)}
            >
              <div
                className="md:ml-10 md:max-w-[92%] transition-all"
                width="100%"
                height="auto"
              >
                <img
                  className="w-full rounded-full md:w-full"
                  src="https://tynmagazine.com/wp-content/uploads/sites/3/2022/03/434767_billetera.jpg"
                  alt="logo"
                />
              </div>
            </motion.div>
            <div className="md:ml-10 mt-8">
              <h2 className="text-center md:text-left mb-4 mt-5 pt-4 md:mt-0 md:px-0 text-5xl lg:text-6xl font-semibold">
                Promotions with WALLET
                <br /> are added to those of your banks!
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                Take advantage of installments, discounts and promotions <br />{" "}
                what we have for you.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center py-24 px-6 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <div className="md:ml-10 mt-8">
              <h2 className="text-center md:text-left mb-4 mt-5 pt-4 md:mt-0 md:px-0 text-5xl lg:text-6xl font-semibold">
                Take control
                <br /> of your finances
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                From your account menu <br /> will manage all your movements.
              </p>
            </div>
            <div
              className="md:ml-10 md:max-w-[92%] transition-all"
              width="100%"
              height="auto"
            >
              <img
                className="w-full rounded md:w-full"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4ONHQWJ5CVA4JOSFZV4ADRGA6E.jpeg"
                alt="logo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
