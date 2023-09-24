import React from 'react';

interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

interface BillDetailsProps {
  bill: Bill;
}

const BillDetails: React.FC<BillDetailsProps> = ({ bill }) => {
  return (
    <div>
      <h2>Bill Details</h2>
      <p>Name: {bill.name}</p>
      <p>Amount: ${bill.amount}</p>
      <p>Due Date: {bill.dueDate}</p>
    </div>
  );
};

export default BillDetails;
