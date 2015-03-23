---
rtemplate: article.jsx
title: "Article 1: Static Page Generation with Isomorphic React"
---
This is a demo of [Isomorphic React](http://bensmithett.github.io/going-isomorphic-with-react/#/) using the static site generator [Metalsmith](http://www.metalsmith.io/).

When you first enter the site, you were served a full HTML page, but subsequent page loads use JSON. But unlike an typical Isomorphic app, all the HTML and JSON are generated in advance. This has a few interesting effects. Don't want to pay for server? Host your site on [GitHub Pages](https://pages.github.com/). Enjoy the benefits of [GitHub Pages CDN](https://github.com/blog/1715-faster-more-awesome-github-pages) caching your static content and satisfy your need for speed. Not interested in GitHub Pages? Upload your site to your own web server and CDN and watch your resource usage plummet.

Below are a few links to test out the JSON loading code. You may want to open your network tab to watch the AJAX requests.
 * [Article 2](article2.html)
 * [Broken Article Link](article23.html)
 * [Google](https://www.google.com)

The input box lets you test data retention. If you enter in text and click on a valid article link, your input text should be retained.
