import React from 'react';
import StripeSDK from 'stripe'; // Rename the imported module to avoid conflict

export const Stripe = StripeSDK(process.env.STRIPE_SK);
export const formatAmount=(amount)=>{
  return `₹${amount/100}`
}
