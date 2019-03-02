[![Netlify Status](https://api.netlify.com/api/v1/badges/45dac40a-0033-49d4-80be-c6b7c79165d2/deploy-status)](https://app.netlify.com/sites/hungry-wing-99d627/deploys)

# Blog

This is a project with two objectives
- working with a modern static site generator with all the benefits of *React*, *GraphQL* and *Markdown*,
- while also making a new blog to share ideas about programming with the internet.

While I've tried some other static site generators for my other projects (projects and resume), Gatsby is probably the most powerful because it leverages the work already done by the React community.

## Starter Kit

For this blog, I'm using the [Hello World](https://github.com/panr/gatsby-starter-hello-friend) starter kit for Gatsby from [Radosław Kozieł](https://radoslawkoziel.pl).

This starter is very clean and enables me to get started very easily and quickly. It has some cool features already built in:
- **dark/light mode**, depending on your preferences (dark is default, but you can change it)
- nice code highlighting thanks to [**PrismJS**](https://prismjs.com)
- responsive youtube/vimeo etc. videos [gatsby-remark-embed-video](https://github.com/borgfriend/gatsby-remark-embed-video)
- fully responsive site

## Customizations
While the starter kit is great out of the box, I've made some modifications to tailor the experience to my needs:
- replaced the font to [**Fira Code font**](https://github.com/tonsky/FiraCode), made by [Nikita Prokopov](https://twitter.com/nikitonsky) to suit my preference better.
- latex support using `katex`
- **TODO:** integrate a way to add a shader file to a post and automatically render that shader in a widget, perhaps using [this gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-glslify/).
- **TODO:** infinite scroll to automatically load older posts instead of pagination.

#### To run the site in development mode
```bash
npm run develop
```

#### To generate build version
```bash
npm run build
```