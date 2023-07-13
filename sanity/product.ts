import { TbShoe } from "react-icons/Tb";

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  icon: TbShoe,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "Fprice",
      title: "Full Price",
      type: "number",
    },
    {
      name: "Dprice",
      title: "Discounted Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "size",
      title: "Size",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "size" }],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
  ],
};
