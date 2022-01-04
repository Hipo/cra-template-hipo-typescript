# CRA Hipo TypeScript Template App

Short description of the project

- Web App: [app.domain.com](#)
- Design: [Figma](#)
- Codebase: [Dashboard](#)

## Development

This project was created with [Create React App](https://github.com/facebook/create-react-app). Therefore, the usual react-scripts are available in this project.

### Install dependencies

- `npm install`

### Start the development environment

- `npm start`

### Deploy

Either GitHub workflows or CircleCI is used for deployments. Check [Setting Up a New Project](https://github.com/Hipo/web-handbook/blob/master/setting-up-a-new-project.md) section in our handbook for more details.

### Husky and lint-staged

[Husky](https://github.com/typicode/husky) is configured with [lint-staged](https://github.com/okonet/lint-staged) to run ESLint, Stylelint and Prettier on the staged files, and then type-check the application before committing your changes.

## Contribution

All development branches should be checked out from `next-release` branch and pull requests should be opened against the `next-release` branch.

### Versioning

We follow [SemVer](https://semver.org/) convention to update the version for each release.

### Commit Messages

We adapted [Conventional Commits specification](https://www.conventionalcommits.org/) to create an easy to read commit history. Please refer to this specification and structure your commits in a compatible way.
