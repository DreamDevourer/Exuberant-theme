<h1 align="center">EXUBERANT Theme 🍀</h1>

<p align="center">
  Exuberant is a theme dedicated to for non-profit organizations, nature and human friendly.
</p>

<p align="center">
  <a href="./STYLEGUIDE.md">Styleguides</a> |
  <a href="https://marketplace.remotish.agency/exuberant-theme">Demo website</a> |
  <a href="#">Contributing</a> |
  <a href="./LICENSE">License</a>
</p>

## Free and Open Source Theme
It's a free and open-source theme made by me and with help of Remotish Agency, designed in Figma to be modern, clean and developed with optimization in mind.

**The best features of this theme:**
 
- Drag and drop modules with the new HubSpot engine
- Based on ITCSS file structure
- Fully responsive 
- Native HubSpot design
- Free Google Fonts
- F.A.Q module
- Pricing module
- Product Module
- Blog listings
- Blog Articles
- Many Heros
- Landing Page Template
- Video and Image modules
- Image Carousel
- Many Galleries
- Mansory Gallery
- Product Carousel
- Many Text modules with CTA
- Fully Customizable Theme
- All images optimized from the design, with WebP file format
- All modules are lazy load ready
- All system pages included

## Getting started
### To use version control in your project using GitHub and GitHub Actions:

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the Exuberant Theme repository and [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your forked repository to your computer
2. [Set up GitHub secrets in your forked repository to encrypt sensitive information from showing publically](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) for `HUBSPOT_PORTAL_ID` and `HUBSPOT_PERSONAL_ACCESS_KEY`
3. Update the name of the directory that you'll be deploying to in your Design Manager in the `.github/workflows/deploy.yml` file (the current default `dest_dir` is `Exuberant-theme`)
4. Deploy changes to your Design Manager by pushing to the `main` branch of your forked repository

Please reference the [_HubSpot CMS deploy GitHub action page_](https://github.com/marketplace/actions/hubspot-cms-deploy) and _[Setting up continuous integration with a GitHub repository using GitHub Actions article](https://designers.hubspot.com/tutorials/github-integration)_ for more information.

## Getting Started
### Using the theme with the Source Code locally

1 - Make sure you have NPM installed on your OS, commonly Unix OSs like BSDs, Linux distros and MacOS already have NPM installed by default. On MS Windows use scoop or download directly from the source.

2 - After that run ``` npm install -g @hubspot/cli ``` to install HubSpot tools globally. You also can install to just the current directory with "npm install @hubspot/cli" but **it's not recommended**.

3 - Inside Exuberant Theme directory run ```hs init``` and follow the steps.

4 - Finally upload the theme to your CMS with ```hs upload --account=<name> <src> <dest>``` (Example: ``` hs upload --account=123456789 . "/my themes folder" ```)
  
FOR UPDATING/UPGRADING - Use this command to update HubSpot Tools ``` npm install -g @hubspot/cli@latest ```
  
FOR AUTOMATIC UPLOAD TO THE CMS - Watch your local directory and automatically upload changes to your HubSpot account on file saves with ``` hs watch --account=<name> <src> <dest> ```. Changes will be live immediately.
