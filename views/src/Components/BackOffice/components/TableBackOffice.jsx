import React, { useState } from "react";

const TableBackOffice = ({ data }) => {
  const [pages, setPages] = useState({
    previous: 0,
    next: 10,
  });

  const handlePagination = (type) => {
    const maxPage = data.length;

    if (type === "increment" && pages.next < maxPage) {
      setPages({
        ...pages,
        previous: pages.previous + 10,
        next: pages.next + 10,
      });
    }
    if (type === "decrement" && pages.previous > 0) {
      setPages({
        ...pages,
        previous: pages.previous - 10,
        next: pages.next - 10,
      });
    }
  };

  const dataToShow = data.slice(pages.previous, pages.next);

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead className="border-t">
          <tr>
            <th className="p-3 font-semibold tracking-wide text-left">Id</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              First Name
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Last name
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">Email</th>
            <th className="p-3 font-semibold tracking-wide text-left">Role</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {dataToShow?.map((user) => (
            <tr className="text-left border-t border-b" key={user.id}>
              <td className="px-3 py-4 text-sm whitespace-nowrap">{user.id}</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                {user.firstName}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                {user.lastName}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                {user.email}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                {user.roleId}
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap">
                <button className="ml-auto px-4 py-2 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                  Block
                </button>
                <button className="ml-auto px-4 py-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <div className="flex flex-col lg:flex-row gap-y-2">
          <button
            className="mt-6 ml-auto px-4 py-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={() => handlePagination("decrement")}
          >
            previous
          </button>
          <div className="mt-6 ml-auto px-4 py-2 ">
            <p>{`Showing ${pages.previous} - ${pages.next}`}</p>
          </div>
          <button
            className="mt-6 ml-auto px-4 py-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={() => handlePagination("increment")}
          >
            next
          </button>
        </div>
      </table>
    </div>
  );
};

export default TableBackOffice;
