# GitHub Pages deployment

* gh-pages deployment and hosting used as instructed in Traversy Media's video [GitHub Pages Deploy & Domain](https://www.youtube.com/watch?v=SKXkC4SqtRk&t=731s)
* also [GiHub documentation](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)

### First preparation

1. install npm gh-pages package `npm i gh-pages`
1. create **dist** folder
1. in `package.json`

```
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "--PUT YOUR PAGE HERE--"
```
4. In [github](https://github.com) / settings set correct source branch in GitHub Paged section

### Custom domain

1. In your domain host admin panel find DNS Management and set records directing to [github](https://github.com):
```
Type: A record 
Host: @

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
1. In [github](https://github.com) / settings add custom domain in GitHub Paged section
1. Make sure to have CNAME file in **dist** folder with your custom domain name

### Steps for correct GitHub Pages deployment

0. After making changes...
1. ~~Copy changes files like **html**, **css**, **js** files (don't forget about files changed in subfolders like **/assets**!) to **dist** folder!~~ Except .js file, just put all of your files to **/dist** and forget about copy/paste need =D
1. in html file change to `<script src="./script.js"></script>`
1. `npm run bundle` to update .js file
1. `git commit`
1. `git push`
1. `npm run deploy`
