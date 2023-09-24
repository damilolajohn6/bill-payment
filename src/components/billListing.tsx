import React from 'react';

interface Bill {
  id: string;
  name: string;
  amount: number;
}

interface BillListingProps {
  bills: Bill[];
}

const BillListing: React.FC<BillListingProps> = ({ bills }) => {
  return (
    <div>
      <h2>Bill Listing</h2>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>
            {bill.name} - ${bill.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillListing;
