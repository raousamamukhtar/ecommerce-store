import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { blockContent } from "./blockContent";
import { size } from "./size";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, blockContent, size],
};
