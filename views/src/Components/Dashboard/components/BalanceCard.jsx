import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const BalanceCard = ({ user }) => {
  // const [balance, setBalance] = useState(0);
  const [money, setMoney] = useState(0);
  const [Incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    setMoney(user?.account?.money);

    const positiveBalance = user?.account?.incomingTransaction
      .map((transaction) => transaction.amount)
      .reduce((prev, curr) => prev + curr, 0);

    const negativeBalance = user?.account?.transaction
      .map((transaction) => transaction.amount)
      .reduce((prev, curr) => prev + curr, 0);

    setIncomes(positiveBalance);
    setExpenses(negativeBalance);
  }, [user])

  return (
    <div className="flex flex-col flex-wrap w-full gap-10">
      <div className="flex h-full items-center border px-6 lg:px-10 py-16 gap-12 rounded-lg bg-gradient-to-b from-teal-50 to-white">
        <div className="flex flex-col 2xl:w-2/4 gap-6 z-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold gap-4 opacity-80">
              Current balance:
            </p>
            <p className="text-4xl lg:text-5xl font-bold">${money}</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-2">
            <div className="flex lg:border-r lg:pr-4 items-center gap-2">
              <i className="text-2xl text-teal-500">
                <BsArrowUpCircleFill />
              </i>
              <div className="flex flex-col">
                <p className="text-sm">Incomes:</p>
                <p className="font-medium">${Incomes} </p>
              </div>
            </div>
            <div className="flex lg:pl-4 items-center gap-2">
              <i className="text-2xl text-red-500">
                <BsArrowDownCircleFill />
              </i>
              <div className="flex flex-col">
                <p className="text-sm">Expenses:</p>
                <p className="font-medium">${expenses}</p>
              </div>
            </div>
          </div>
        </div>
        <picture className="w-2/4 h-full hidden 2xl:flex">
          <img
            src="3d-credit-card.png"
            className="object-contain w-4/6 h-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default BalanceCard;
