import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "टिप्पणी (Comment)",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "समाचार",
      type: "reference",
      to: [{ type: "post" }],
      readOnly: true,
    }),
    defineField({
      name: "name",
      title: "नाम",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "ईमेल",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "comment",
      title: "टिप्पणी",
      type: "text",
      rows: 5,
      readOnly: true,
    }),
    defineField({
      name: "approved",
      title: "मंज़ूर",
      type: "boolean",
      description: "टिक करने पर ही टिप्पणी वेबसाइट पर दिखेगी।",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "नई पहले",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      approved: "approved",
      postTitle: "post.title",
    },
    prepare({ name, comment, approved, postTitle }) {
      return {
        title: `${approved ? "✓" : "•"} ${name ?? "अनाम"}`,
        subtitle: `${postTitle ?? "—"} — ${comment ?? ""}`,
      };
    },
  },
});