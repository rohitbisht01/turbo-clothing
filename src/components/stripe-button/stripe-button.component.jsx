import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JW08LSHUECH8zeWoEjfQyXypObqUkTwohEmJuwbWzEdQ7oPnc9Wc5vG2bXO7Mje7sgAU9tb0FpiNRm3cDazmuRT00kgdz7uka";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Turbo Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
