import { Stripe, loadStripe } from "@stripe/stripe-js";
import { toast } from "react-hot-toast";

let stripePromise: Promise<Stripe | null>;

const getStipePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  if (!stripePromise && !!key) {
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export default getStipePromise;
