module.exports = {
  pathPrefix: `/digital-garden`,
  siteMetadata: {
    title: `Adrien's digital garden`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        plugins: [
        `gatsby-remark-mathjax`,
        ],
        rootNote: "/index",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
