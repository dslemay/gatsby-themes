module.exports = {
  '*.{js,jsx}': ['prettier --write', 'eslint --fix', 'git add'],
  '*.md': ['prettier --write', 'git add'],
};
