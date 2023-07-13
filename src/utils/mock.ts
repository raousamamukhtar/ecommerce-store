import { client } from "../../sanity/lib/client";

export async function getProductData(id: any) {
  const res = await client.fetch(`*[_type == 'product' && _id == '${id}'] {
      title,
        Dprice,
        Fprice,
        _id,
        image,
        "sizes": *[_type == "size"].title,
        description,
        category -> {
          name
        }
    }`);
  return res;
}
