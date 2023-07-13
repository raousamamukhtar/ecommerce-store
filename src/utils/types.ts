import { Image as IImage } from "sanity";

export interface Iproduct {
  slug: any;
  discount: any;
  price(price: any, discount: any): unknown;
  title: "string";
  Dprice: "number";
  Fprice: "number";
  _id: "number";
  image: IImage;
  description: "string";
  sizes: {
    title: "string";
  };
  category: {
    name: "string";
  };
}

export type CartProduct = {
  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;
};
