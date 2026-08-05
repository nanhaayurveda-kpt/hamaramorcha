import type { StructureResolver } from "sanity/structure";

const API_VERSION = "2023-05-03";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("posts")
        .title("समाचार")
        .child(
          S.documentList()
            .id("posts-list")
            .title("समाचार")
            .apiVersion(API_VERSION)
            .filter('_type == "post"')
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.documentTypeListItem("category").title("श्रेणियाँ"),
      S.divider(),
      S.listItem()
        .id("comments")
        .title("टिप्पणियाँ")
        .child(
          S.list()
            .id("comments-list")
            .title("टिप्पणियाँ")
            .items([
              S.listItem()
                .id("comments-pending")
                .title("मंज़ूरी बाकी")
                .child(
                  S.documentList()
                    .id("comments-pending-list")
                    .title("मंज़ूरी बाकी")
                    .apiVersion(API_VERSION)
                    .filter('_type == "comment" && approved != true')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]),
                ),
              S.listItem()
                .id("comments-approved")
                .title("मंज़ूर")
                .child(
                  S.documentList()
                    .id("comments-approved-list")
                    .title("मंज़ूर")
                    .apiVersion(API_VERSION)
                    .filter('_type == "comment" && approved == true')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]),
                ),
            ]),
        ),
    ]);