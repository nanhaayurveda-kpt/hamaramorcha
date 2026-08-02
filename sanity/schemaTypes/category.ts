import { defineField, defineType } from "sanity";
import { hindiToRoman } from "./utils";

export default defineType({
  name: "category",
  title: "श्रेणी (Category)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "श्रेणी का नाम",
      type: "string",
      validation: (Rule) => Rule.required().error("श्रेणी का नाम आवश्यक है"),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        slugify: (input) => hindiToRoman(input),
      },
      validation: (Rule) => Rule.required().error("Slug आवश्यक है"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
  },
});