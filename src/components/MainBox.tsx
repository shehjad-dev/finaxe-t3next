import React from "react";
import TransactionTable from "./TransactionTable";
import { useEffect, useState } from "react";
import transactionData from "../data/transactionData";

type Props = {};

const MainBox = (props: Props) => {
  const [totalBalance, setTotalBalance] = useState(0);
  console.log(transactionData);

  useEffect(() => {
    let currentBalance: any = 0;
    for (let i = 0; i < transactionData.length; i++) {
      currentBalance = currentBalance + transactionData[i]?.amount;
    }
    setTotalBalance(currentBalance);
  }, []);

  return (
    <div className="h-full flex-auto rounded-md bg-white p-5 text-black sm:flex-1">
      <div>
        <h2 className="text-xl font-bold text-secondary1">Transactions</h2>
      </div>
      <TransactionTable />
      <div>
        <span className="mt-4 block w-full border-t-2 border-primary1 border-opacity-25 text-center text-lg">
          <span className="mx-auto mt-3 block w-fit rounded-lg bg-secondary2 bg-opacity-30 p-3 font-medium text-secondary1">
            Total Balance : $ {totalBalance}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MainBox;
