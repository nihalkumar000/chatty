# DMA Item-Mapper
  'Item Mapper' functionality is used by DMA to Create/maintain a DMA 'master' catalog of distributor products (aka 'Items') which were actually purchased (identified from distributer invoices) by the DMA distributor accounts. As different distributors can have the same item in their respective catalogs, Item-mapper 'maps' (cross-references) the distributor's items to the DMA master catalog item. Any products which show up in distributers's invoices and are not listed in distributer's Master catalog needs mapping to Distributer Master Catalog. These products are shown in Item-mapper UI's  `Needs Attention Workspace`, based on changes in concerned fields of a product.

---
## Requirements

  For development, you will only need Node.js and a node global package, npm, nvm installed in your environement.

## Set up running Environment:
  Project uses Angular CLI v6. Angular CLI v6 runs on minimum node version of v8.9
### NVM installation:
  NVM is used to manage and switch between various node version.
  To install or update nvm, you should run the install script. To do that, you may either download and run the script   manually, or use the following cURL or Wget command:
  
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

### Node installation:
  
  $ nvm install v8.9
  $ nvm use v8.9

### Insatll Project dependencies listed in package.json
  
  $ npm install 

## Install
  
  $ git clone https://bitbucket.corp.itradenetwork.net/YOUR_USERNAME/PROJECT_TITLE
  $ cd PROJECT_TITLE
  $ npm install

## Configure app

  Open `/proxy.config.json` then edit it with your settings. You can edit these settings to configure proxies for local development.

## Running the project

    $ npm start

## Simple build for production

    $ npm build
