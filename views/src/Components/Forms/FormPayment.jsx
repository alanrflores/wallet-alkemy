import React, { useState } from "react";
import FormItem from "./components/FormItem";
import { inputTransaction } from "./components/validateSchema";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createTransactions } from "../../redux/features/transaction/transactionGetSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormTransaction = () => {
  const [selectedCategory, setSelectedCategory] = useState("Expense");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit = async (values, actions) => {
    const newOp = {
      ...values,
      category: selectedCategory,
      email: "godAccount@cloud.com",
    };
    const rta = await dispatch(createTransactions(newOp));
    console.log("RA", rta);
    if (rta.status === 201 || rta.status === 200) {
      Swal.fire("Successfully transaction", undefined, "success");
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      Swal.fire(`(${rta.status})  ${rta.data.message}`, undefined, "error");
    }
  };

  return (
    <section className="flex items-center justify-center lg:mx-auto px-6 py-16 bg-white rounded-lg border">
      <div className="flex w-full">
        <Formik
          initialValues={{ amount: "", concept: "" }}
          /*  validationSchema={inputTransaction} */
          onSubmit={onSubmit}
          className="flex flex-row items-center justify-center lg:justify-start"
        >
          {(props) => (
            <Form className="flex flex-col w-full gap-4">
              <h3 className="text-2xl font-bold text-center">
                New transaction
              </h3>
              <div className="flex flex-col gap-2">
                <FormItem
                  classLabel="block"
                  labelText="Amount:"
                  classInput="lg:min-w-[30rem] lg:w-4xl px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="number"
                  name="amount"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormItem
                  classLabel="block"
                  labelText="Concept:"
                  classInput="lg:min-w-[30rem] lg:w-4xl px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  type="text"
                  name="concept"
                  placeholder="Concept"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block">Category</label>
                <select
                  className="lg:min-w-[30rem] lg:w-4xl px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="category"
                  value={selectedCategory}
                  onChange={(event) => categoryChange(event)}
                >
                  <option value="User-transfer">Payment</option>
                </select>
              </div>
              {/*           <FormItem
              classLabel="block mt-3"
              labelText="Email:"
              classInput="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="email"
              type="email"
              placeholder="email"
            /> */}
              <button
                type="submit"
                className="ml-auto w-fit text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormTransaction;
