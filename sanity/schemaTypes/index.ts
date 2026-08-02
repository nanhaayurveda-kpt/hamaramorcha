import type { SchemaTypeDefinition } from "sanity";

import category from "./category";
import post from "./post";
import blockContent from "./blockContent";
import comment from "./comment";

export const schemaTypes: SchemaTypeDefinition[] = [
  category,
  post,
  blockContent,
  comment,
];