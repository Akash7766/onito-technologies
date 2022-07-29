import React from "react";

const ReceiptForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReceipt = {
      date: e.target.date.value,
      amount: e.target.amount.value,
      payment_method: e.target.select.value,
      remark: e.target.remark.value,
    };
    console.log(newReceipt);
  };
  return (
    <div className="container mx-auto max-w-xl bg-gray-300 p-4">
      <h2 className="text-xl mb-5">Receipt Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-3">
          <div className="w-3/12">
            <label>Date</label>
          </div>
          <input
            required
            className="w-2/5 pl-2 outline-none bg-transparent border border-gray-500 rounded-md"
            name="date"
            type="date"
          />
        </div>
        <div className="flex mb-3">
          <div className="w-3/12">
            <label>Amount</label>
          </div>
          <input
            required
            className="w-3/4 pl-2 outline-none bg-transparent border border-gray-500 rounded-md"
            name="amount"
            type="number"
          />
        </div>
        <div className="flex mb-3">
          <div className="w-3/12">
            <label>Payment Mode</label>
          </div>
          <select
            name="select"
            className="p-1 bg-transparent outline-none select-ghost w-3/5 border border-gray-500 rounded-md"
          >
            <option>cash</option>
            <option>Bank</option>
            <option>PayTM</option>
          </select>
        </div>
        <div className="flex mb-3">
          <div className="w-3/12">
            <label>Remark</label>
          </div>
          <input
            required
            className="w-3/4 pl-2 outline-none bg-transparent border border-gray-500 rounded-md"
            name="remark"
            type="text"
          />
        </div>
        <div className="mt-10 flex justify-evenly">
          <input
            className="btn bg-slate-200 border border-red-400 text-red-400"
            type="reset"
            value="Cancel"
          />
          <input
            className="btn bg-green-500 border border-green-500"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ReceiptForm;
