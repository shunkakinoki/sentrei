module.exports = {
  defaultLocale: "en",
  locales: ["en", "ja", "zh"],
  pages: {
    "*": ["common", "dialog", "error"],
  },
  loadLocaleFrom: (lang, ns) => {
    return import(`../../locales/${lang}/${ns}.json`).then(m => {
      return m.default;
    });
  },
};
