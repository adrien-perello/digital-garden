module.exports = {
  pathPrefix: `/digital-garden`,
  siteMetadata: {
    title: `Adrien's digital garden`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        remarkPlugins: [require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`)],
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
