export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6062772cc064960085acc087",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6vwkmhgc",
                  apiId: "2c1da409-ae68-4079-badc-5f521d03574b",
                },
                {
                  buildHookId: "6062772c56858f007ca8cf65",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-v48hm9h9",
                  apiId: "d20f71b8-0b1e-4b68-98a1-4c52db0cf170",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/srinathanand/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-v48hm9h9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
