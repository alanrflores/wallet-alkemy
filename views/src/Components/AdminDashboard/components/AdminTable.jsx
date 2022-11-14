const AdminTable = ({ movements }) => {
  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead className="border-t">
          <tr>
            <th className="p-3 font-semibold tracking-wide text-left">Id</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Amount
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Category
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Concept
            </th>
            <th className="p-3 font-semibold tracking-wide text-left">From</th>
            <th className="p-3 font-semibold tracking-wide text-left">To</th>
            <th className="p-3 font-semibold tracking-wide text-left">Date</th>
            <th className="p-3 font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {movements
            .map(
              ({
                id,
                amount,
                concept,
                category,
                userFrom,
                userTo,
                createdAt,
              }) => {
                return (
                  <tr className="text-left border-t border-b" key={id}>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {id}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      ${amount}
                    </td>
                    <td
                      className={`px-3 py-4 text-sm font-bold whitespace-nowrap ${
                        category === "Expense"
                          ? "text-red-500"
                          : "text-teal-500"
                      }`}
                    >
                      <p>{category}</p>
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {concept}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {userFrom}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {userTo}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap">
                      {createdAt.slice(0, 10)}
                    </td>
                    <td className="px-3 py-4 flex gap-4 items-center whitespace-nowrap">
                      <Link
                        className="hover:border-black duration-200 border px-4 py-1 rounded-lg"
                        to={`/movements/${id}`}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              }
            )
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
