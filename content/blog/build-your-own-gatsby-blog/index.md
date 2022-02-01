---
title: "Build and deploy your personal blog using GatsbyJS and GH Pages"
date: "2020-05-28T22:40:32.169Z"
description: "Deploy a super fast blog using GatsbyJS and host it for free via GitHub pages."
minread: 3
type: blog
tags: 
  - programming
---


This website you're viewing is built using GatsbyJS, the blog (held under /posts) is derived from the Gatsby Blog Starter (discussed below). You can fork this repo to quickly build and deploy your own lighting fast blog, customise it how you please, and deploy it for free using GitHub pages. This post will walk you through this quick and easy setup.

> Familarity with JS and React is only a prerequisite if you want to customise site functionality.

### What is GatsbyJS?

[Gatsby](https://www.gatsbyjs.org/) is a React-based static site generator, powered by [GraphQL](https://graphql.org/). It weaves together parts of React - 
specifically webpack, react-router, GraphQL (among others) - into an easy to use development framework.
The term static site generator may be a bit misleading, Gatsby is far more like a modern front-end framework
and can be used to build progressive web apps.

It uses powerful preconfiguration to build a website that uses only static files for incredibly fast page loads, 
service workers, code splitting, server-side rendering, intelligent image loading, asset optimization, and data prefetching - all out of the box. 

After writing your code Gatsby transforms it into a directory with a single HTML file and your static assets and this folder is uploaded to your hosting provider - voila.

### Gatsby Starter Blog

There are tons of pre-built Gatsby templates available to be cloned from github offering you the chance to build 
and deploy faster. In order to create our blog we're going to use [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog), giving us a pre-built blog template that can be modified as we please. This template uses markdown files as blog posts, auto generating
pages (and slugs) for each of the 'posts'. GraphQL is leveraged to query the static files for each of the requested items, resulting in a super fast final product. 

### Getting started

To get started you'll want to ensure you have a recent version of Node.js installed (feel encouraged to Google this).

Install gatsby
``` 
npm install gatsby
```

Clone down the gatsby-starter-blog repo
``` 
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```

Fire up the site and start developing
```
cd my-blog-starter/
gatsby develop
```

You'll notice in the terminal the site is running at http://localhost:8000, and you can also access http://localhost:8000__graphql to practice querying your data using GraphQL.

### Some pointers

- **gatsby-config.js** as the name states houses the site configurations, you can add additional gatsby plugins here & modify site metadata
- **gatsby-node.js** contains the graphql query and js code that constructs a page for each markdown post
- Blog posts are written in markdown and each live within the /content directoy, the name of which is used as the page slug

### Deploying to GH pages (for free)

Create a repo to house your website ready for deployment.

First, add the GitHub repo name to your gatsby-config.js file. Assuming your GitHub repo is called 'myBlog'...
``` jsg
module.exports = {
  pathPrefix: "/myBlog",
}
```
Next, add a custom command deploy to your package.json file.

``` jsg
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```
This creates a deploy command that creates a static version of your site with the prefix of /myBlog/ for every URL and then pushes the public directory using the gh-pages plugin.

Next, add the GitHub repository as the origin remote to your Gatsby Git repository by running the following command:
``` jsg
git remote add origin https://username.github.com/myBlog
```

To build and deploy your site run the custom script

``` jsg
npm run deploy
```
This will push the data to the gh-pages branch of your repository, without adding any commits to other branches. Almost instantly after the push, you can view your served pages on username.github.io/myBlog.

If you own a domain you can associate it with your hosted repo to change the domain of your site -  follow [this](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) link.