import { defineField, defineType } from "sanity";
import { hindiToRoman } from "./utils";
import CloudinaryImageInput from "./CloudinaryImageInput";

export default defineType({
  name: "post",
  title: "समाचार (Post)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "शीर्षक",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(200)
          .error("शीर्षक 10-200 अक्षरों के बीच होना चाहिए"),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) => {
          const romanized = hindiToRoman(input);
          const timePart = new Date()
            .toISOString()
            .replace(/[-:.TZ]/g, "")
            .slice(0, 14);
          return `${romanized}-${timePart}`;
        },
      },
      validation: (Rule) => Rule.required().error("URL Slug आवश्यक है"),
    }),
    defineField({
      name: "content",
      title: "सामग्री",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("सामग्री आवश्यक है"),
    }),
    defineField({
      name: "mainImage",
      title: "मुख्य तस्वीर (Cloudinary URL)",
      type: "string",
      components: {
        input: CloudinaryImageInput,
      },
    }),
    defineField({
      name: "mainImageCaption",
      title: "मुख्य तस्वीर कैप्शन",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "प्रकाशन तारीख",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error("प्रकाशन तारीख आवश्यक है"),
    }),
    defineField({
      name: "category",
      title: "श्रेणी",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required().error("श्रेणी का चुनाव आवश्यक है"),
    }),
    defineField({
      name: "views",
      title: "Views Count",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
  ],
  orderings: [
    {
      title: "प्रकाशन तारीख के अनुसार (नया पहले)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "शीर्षक के अनुसार",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category.name",
      publishedAt: "publishedAt",
    },
    prepare({
      title,
      category,
      publishedAt,
    }: {
      title?: string;
      category?: string;
      publishedAt?: string;
    }) {
      const formattedDate = publishedAt
        ? new Date(publishedAt).toLocaleDateString("hi-IN")
        : "तारीख नहीं";
      return {
        title,
        subtitle: `${category || "बिना श्रेणी"} • ${formattedDate}`,
      };
    },
  },
});