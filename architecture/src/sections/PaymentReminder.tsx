import React from 'react';

const PaymentReminder: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">SERVICE SUSPENDED DUE TO UNPAID INVOICE</h1>
        <p className="text-xl mb-4">
          This website is currently offline due to an unpaid invoice for services rendered. 
        </p>
        <p className="text-lg mb-6">
          Despite several reminders, the payment agreed upon has not been made. This is a public notice that the website will remain suspended.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Failure to pay will result in permanent suspension of services and legal action if necessary.
        </p>
      </div>
    </div>
  );
};

export default PaymentReminder;
