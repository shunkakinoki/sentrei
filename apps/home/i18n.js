module.exports = {
  defaultLocale: "en",
  locales: ["en", "ja", "zh"],
  pages: {
    "*": ["common", "dialog", "error"],
    "/": ["index"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`../../locales/${lang}/${ns}.json`).then(m => m.default),
};
