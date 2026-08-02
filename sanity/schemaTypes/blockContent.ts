import { defineArrayMember, defineField, defineType } from "sanity";
import CloudinaryImageInput from "./CloudinaryImageInput";
import MultiImageInput from "./MultiImageInput";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "सामान्य", value: "normal" },
        { title: "शीर्षक 1", value: "h1" },
        { title: "शीर्षक 2", value: "h2" },
        { title: "शीर्षक 3", value: "h3" },
      ],
      lists: [
        { title: "बुलेट पॉइंट", value: "bullet" },
        { title: "संख्या सूची", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "मोटा (Bold)", value: "strong" },
          { title: "तिरछा (Italic)", value: "em" },
          { title: "अंडरलाइन", value: "underline" },
          { title: "पिंक", value: "pink" },
        ],
        annotations: [
          {
            title: "लिंक",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
              {
                title: "नई विंडो में खोलें",
                name: "blank",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "object",
      name: "cloudinaryImage",
      title: "तस्वीर (Cloudinary)",
      fields: [
        defineField({
          name: "url",
          title: "Image URL",
          type: "string",
          components: {
            input: CloudinaryImageInput,
          },
        }),
        defineField({
          name: "caption",
          title: "कैप्शन",
          type: "string",
        }),
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "gallery",
      title: "फोटो गैलरी",
      fields: [
        defineField({
          name: "images",
          title: "तस्वीरें",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "galleryImage",
              fields: [
                defineField({
                  name: "url",
                  title: "Image URL",
                  type: "string",
                }),
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            }),
          ],
          components: {
            input: MultiImageInput as never,
          },
          validation: (Rule) => Rule.min(1).error("कम से कम एक तस्वीर जोड़ें"),
        }),
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "youtube",
      title: "YouTube Video",
      fields: [
        defineField({
          name: "url",
          title: "YouTube URL",
          type: "url",
          validation: (Rule) =>
            Rule.required().uri({ scheme: ["http", "https"] }),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "pdfDocument",
      title: "PDF दस्तावेज़",
      fields: [
        defineField({
          name: "file",
          title: "PDF फाइल",
          type: "file",
          options: { accept: "application/pdf" },
          validation: (Rule) => Rule.required().error("PDF फाइल आवश्यक है"),
        }),
        defineField({
          name: "caption",
          title: "शीर्षक",
          type: "string",
        }),
      ],
      preview: {
        select: {
          title: "caption",
        },
        prepare({ title }: { title?: string }) {
          return {
            title: title || "PDF दस्तावेज़",
          };
        },
      },
    }),
    defineArrayMember({
      type: "object",
      name: "break",
      title: "पेज ब्रेक",
      fields: [
        defineField({
          name: "style",
          type: "string",
          options: { list: ["break", "line"] },
        }),
      ],
    }),
  ],
});
