module.exports = {
  title: "watermark ",
  description: "Test",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "浮水", link: "/float/" },
      { text: "彈跳", link: "/popup/" }
    ],
    sidebar: {
      "/float/": ["type1", "type2", "type3", "type4", "type5"],
      "/popup/": ["video", "input", "opinion"]
    },
    scss: {
      includePaths: ["./public/all.scss"]
    }
  }
};