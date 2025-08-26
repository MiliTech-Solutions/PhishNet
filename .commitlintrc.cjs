module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'ci', 'build']],
    'header-pattern': [2, 'always', /^(feat|fix|chore|docs|refactor|test|ci|build)(\([^)]*\))? PHN-\d+: .+/]
  }
};