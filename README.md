# Frontity Template

You can use this template to start a project on either [CodeSandbox](https://codesandbox.io) or [StackBlitz](https://stackblitz.com/).

## CodeSandbox

### Using a new template

- Click on this link: https://githubbox.com/frontity/frontity-template
- Wait until the Frontity application starts.
- Click on "Fork" to make it yours.
- Add changes.

### Using your own project

- Copy the URL of your GitHub repository.
- Rename the domain from `github.com` to `githubbox.com`.
- Load the new URL in the browser.
- Wait until the Frontity application starts.
- Click on "Fork".
- Add changes.

## StackBlitz

### Using a new template

- Click on this link: https://stackblitz.com/fork/frontity
- Run `npm install`.
- Run `npx frontity dev` to start Frontity.
- Add changes.

### Using your own project

- Add this to your `package.json`:

  ```json
  {
    "workspaces": ["packages/*"]
  }
  ```

  _This is necessary until they add support for `file:/packages...` syntax ([related GH issue](https://github.com/stackblitz/webcontainer-core/issues/107))._

- Commit the change.
- Go to https://stackblitz.com/
- Start a new project.
- Choose "Node.js"
- Click on "Connect repository"
- Click on "Import an existing repository"
- Enter the URL of your repository. For example: https://github.com/frontity/frontity-template
- Run `npm install`
- Start Frontity using `npx frontity dev`

---

## Frontity Community

### Channels

[![Community Forum Topics](https://img.shields.io/discourse/topics?color=blue&label=community%20forum&server=https%3A%2F%2Fcommunity.frontity.org%2F)](https://community.frontity.org/) [![Twitter: frontity](https://img.shields.io/twitter/follow/frontity.svg?style=social)](https://twitter.com/frontity) ![Frontity Github Stars](https://img.shields.io/github/stars/frontity/frontity?style=social)

Frontity has a number of different channels at your disposal where you can find out more information about the project, join in discussions about it, and also get involved:

- **📖 [Docs](https://docs.frontity.org/):** Frontity's primary documentation resource - this is the place to learn how to build amazing sites with Frontity.

* **👨‍👩‍👧‍👦 [Community forum](https://community.frontity.org/):** join Frontity's forum and ask questions, share your knowledge, give feedback and meet other cool Frontity people. We'd love to know about what you're building with Frontity, so please do swing by the [forum](https://community.frontity.org/) and tell us about your projects.
* **🐞 Contribute:** Frontity uses [GitHub](https://github.com/frontity/frontity) for bugs and pull requests. Check out the [Contributing](../../CONTRIBUTING.md/) section to find out how you can help develop Frontity, or improve this documentation.
* **🗣 Social media**: interact with other Frontity users. Reach out to the Frontity team on [Twitter](https://twitter.com/frontity). Mention us in your tweets about Frontity and what you're building by using **`@frontity`**.
* 💌 **Newsletter:** do you want to receive the latest news about Frontity and find out as soon as there's an update to the framework? Subscribe to our [newsletter](https://frontity.org/newsletter).

### Get involved

[![GitHub issues by-label](https://img.shields.io/github/issues/frontity/frontity/good%20first%20issue)](https://github.com/frontity/frontity/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Got questions or feedback about Frontity? We'd love to hear from you in our [community forum](https://community.frontity.org).

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start then this guide might help: [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute).

If you would like to start contributing to the code please open a pull request to address one of our [_good first issues_](https://github.com/frontity/frontity/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
