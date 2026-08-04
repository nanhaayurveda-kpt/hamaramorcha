import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("समाचार"),
      S.documentTypeListItem("category").title("श्रेणियाँ"),
      S.divider(),
      S.listItem()
        .title("टिप्पणियाँ")
        .child(
          S.list()
            .title("टिप्पणियाँ")
            .items([
              S.listItem()
                .title("मंज़ूरी बाकी")
                .child(
                  S.documentList()
                    .title("मंज़ूरी बाकी")
                    .filter('_type == "comment" && approved != true')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]),
                ),
              S.listItem()
                .title("मंज़ूर")
                .child(
                  S.documentList()
                    .title("मंज़ूर")
                    .filter('_type == "comment" && approved == true')
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]),
                ),
            ]),
        ),
    ]);
