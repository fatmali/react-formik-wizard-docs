module.exports = {
  title: "React Formik Wizard",
  tagline: "Build Dynamic Forms Quickly with React, JSON and Formik!",
  url: "https://fatmali.github.io",
  baseUrl: "/react-formik-wizard/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "fatmali", // Usually your GitHub org/user name.
  projectName: "react-formik-wizard", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React Formik Wizard",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
        href: "/docs/",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/fatmali/react-formik-wizard",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} React Formik Wizard, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/fatmali/react-formik-wizard/edit/gh-pages/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/fatmali/react-formik-wizard/edit/gh-pages/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
