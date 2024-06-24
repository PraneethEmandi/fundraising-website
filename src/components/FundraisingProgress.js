import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import axios from 'axios';

const FundraisingProgress = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);
  const targetAmount = 2500000;

  const handlePaymentSuccess = async (paymentData) => {
    try {
      const response = await axios.post('http://localhost:5000/create-payment', paymentData);
      // Redirect to PhonePe payment page
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error creating payment', error);
    }
  };

  const handlePayment = () => {
    const paymentData = {
      name: 'Donor Name',
      email: 'donor@example.com',
      contact: '1234567890',
      amount: 10000, // Amount in paise (10000 paise = 100 INR)
    };

    handlePaymentSuccess(paymentData);
  };

  return (
    <div className="fundraising-progress">
      <h3>Fundraising Progress</h3>
      <ProgressBar now={(raisedAmount / targetAmount) * 100} label={`${(raisedAmount / targetAmount) * 100}%`} />
      <p>Amount Raised: ₹{raisedAmount}</p>
      <p>Target Amount: ₹{targetAmount}</p>
      <Button onClick={handlePayment}>Donate Now</Button>
    </div>
  );
};

export default FundraisingProgress;
