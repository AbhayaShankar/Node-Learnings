const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  let amount = 0;

  purchase.map((item) => {
    const { price, quantity } = item;
    amount = amount + price * quantity;
  });

  const calcOrderAmount = () => {
    if (amount === total_amount) {
      return total_amount + shipping_fee;
    }
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calcOrderAmount(),
    currency: "usd",
    description: "Software development testing Stripe Payments",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    payment_method_types: ["card"],
  });

  // console.log(req.body);
  // console.log(paymentIntent);

  res.status(200).json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripePayment;
