import BalanceCard from "./components/BalanceCard";
import TransferCard from "./components/TransferCard";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <BalanceCard user={user} />
        <TransferCard />
      </div>
      <div className="flex flex-col h-fit border rounded-lg p-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <p className="text-2xl font-bold opacity-80 pb-6">Last movements</p>

          <p className="text-lg opacity-80 pb-6">
            Total movements: {user?.account?.transaction?.length}
          </p>
        </div>
        <Table user={user} />
        <Link
          className="mt-6 ml-auto px-4 py-2 border rounded-lg hover:border-black duration-200"
          to="/movements"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
