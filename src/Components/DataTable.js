import React from "react";
import { useSelector } from "react-redux";

const DataTable = () => {
  const receiptData = useSelector((store) => store.receipt);
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Remark</th>
              <th className="text-center">Handle</th>
            </tr>
          </thead>
          <tbody>
            {receiptData.map((data) => (
              <tr>
                <th>{data.date}</th>
                <td>{data.amount}</td>
                <td>{data.payment_method}</td>
                <td>{data.remark}</td>
                <td className="text-center">
                  <button className="btn btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
