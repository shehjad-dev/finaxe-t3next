import React from "react";
import TransactionTable from "./TransactionTable";

type Props = {};

const MainBox = (props: Props) => {
  return (
    <div className="h-full flex-auto rounded-md bg-white p-5 text-black sm:flex-1">
      <div>
        <h2 className="text-xl font-bold text-secondary1">Transactions</h2>
      </div>
      <TransactionTable />
    </div>
  );
};

export default MainBox;
