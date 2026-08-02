import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "टिप्पणी (Comment)",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
    }),
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "comment",
    },
  },
});