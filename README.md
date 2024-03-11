# SPC Redesign

## Directories

### DesignDocs

Basically any files we create to help with design (color palletes, figma files, etc)

### website

All the website code

- node_modules: all dependencies that are installed through npm (hopefully we won't really have many other than the base vue ones)
- public: the folder to put images in
- src: all the vue code
- index.html: the main html file (nothing is really written here though since Vue takes care of it all)

#### Inside of `src`

- assets: mostly just some css that we probably won't need to touch anymore
- components: singular component files (outlook display, watch/warning display, forms, etc)
- router: the thing that controls what is displayed when a particular url is entered
- views: whole pages that contain a combination of code and importing other components
- main.js: the main javascript file (hopefully won't need any more modification for our purposes)

The rest is all just config files that we don't need to really worry about!

## Helpful Project Information

- [SPC Outlook Selector](https://www.spc.noaa.gov/partners/outlooks/)
- [NWS API](https://www.weather.gov/documentation/services-web-api) - if we want to include active watches/warnings and make it actually work

- [Vue Documentation](https://vuejs.org/guide/introduction.html)
- Very good [vue crash course](https://youtu.be/qZXt1Aom3Cs?si=H6ITAzSKE1lyMpYp) by Traversy Media (love this guy)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Install Node (if needed)

Install from [here](https://nodejs.org/en/download). It is a super easy install - the latest version is all you need

## Project Setup

Ensure you are in the website directory

```sh
cd website
```

Install required dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
