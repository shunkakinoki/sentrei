module.exports = {
  hooks: {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged",
    "prepare-commit-msg":
      "exec < /dev/tty && git-cz -e --disable-emoji --hook || true",
  },
};
