import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser } from "../../redux/features/users/usersGetSlice";
import Swal from "sweetalert2";
import { Form, Formik } from "formik";
import FormItem from "../Forms/components/FormItem";
import Botton from "../Buttons/Button";
import { updateSchema } from "../Forms/components/validateSchema";
import { BiErrorCircle } from "react-icons/bi";

const UserPerfil = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [errFile, setErrFile] = useState(false);

  const handleFile = (file) => {
    let supported = [
      "image/jpeg",
      "image/jpg",
      "image/svg+xml",
      "image/webp",
      "image/png",
    ].map((img) => img === file.type);
    if (supported.includes(true)) {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "zcgk2l4m");
      setFile(formData);
      setErrFile(false);
    } else {
      setErrFile(true);
      setFile("");
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section className="flex flex-col w-full lg:w-fit p-6 lg:px-16 lg:py-16 border rounded-lg bg-white mx-auto">
      <h3 className="text-center text-2xl font-bold pb-8">Edit profile</h3>
      {user && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            firstName: `${user.firstName || ""}`,
            lastName: `${user?.lastName || ""}`,
            email: `${user?.email || ""}`,
            password: "",
          }} // no me renderizaba el usuario que traía
          validationSchema={updateSchema}
          onSubmit={(values) => {
            dispatch(updateUser(values, file));
            Swal.fire(
              "Nice! your changes has been saved",
              undefined,
              "success"
            );
          }}
          className="flex flex-row items-center justify-center lg:justify-start"
        >
          {(props) => (
            <Form className="flex flex-col justify-evenly gap-16">
              <div className="w-full flex flex-col lg:flex-row gap-6">
                <div className="h-full  flex flex-row">
                  <img
                    className="w-48 h-48 bg-white border p-2 rounded-lg object-contain min-h-0"
                    src={user?.image}
                    alt="Profile_image"
                  />
                </div>
                <div className="flex justify-end flex-col">
                  <FormItem
                    classLabel="hidden"
                    classInput="py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="file"
                    onChange={(e) => handleFile(e.target.files[0])}
                    name="file"
                  />
                  <div
                    className={`flex items-center gap-1 text-red-600 ${
                      !errFile && "hidden"
                    }`}
                  >
                    <i>
                      <BiErrorCircle />
                    </i>
                    <span>Not supported, try another or leave it!</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                  <FormItem
                    classLabel="w-24"
                    labelText="Name:"
                    classInput="flex w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="text"
                    name="firstName"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                  <FormItem
                    classLabel="w-24"
                    labelText="Lastname:"
                    classInput="flex w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                  <FormItem
                    classLabel="w-24"
                    labelText="Email:"
                    classInput="flex w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                  <FormItem
                    classLabel="w-24"
                    labelText="Password:"
                    classInput="flex w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 justify-center lg:justify-end">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 w-1/3 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Save changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};
export default UserPerfil;
