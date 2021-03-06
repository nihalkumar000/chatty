# DMA Item-Mapper
DMA Item-Mapper functionality is used by DMA to Create/maintain a DMA Master Catalog of Distributor products (aka 'Items') which were actually purchased (identified from distributer invoices) by the DMA distributor accounts. As different distributors can have the same item in their respective catalogs, Item-mapper 'maps' (cross-references) the distributor's items to the DMA Master Catalog item. Any products which show up in distributers's invoices and are not listed in Master catalog needs mapping to Master Catalog. These products are shown in Item-mapper UI's  `Needs Attention Workspace`, based on changes in concerned fields of a product.

---
## Set up running Environment

For development, you will only need Node.js, npm, nvm installed in your environement. Project uses Angular CLI v6. Angular CLI v6 runs on minimum node version of v8.9
### NVM installation:
NVM is used to manage and switch between various node version.
To install or update nvm, you should run the install script. To do that, you may either download and run the script manually, or use the following cURL command:
    
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

### Node installation:
    
    $ nvm install v8.9
    $ nvm use v8.9

### Insatll Project dependencies listed in package.json
    
    $ npm install 

## Install
    
    $ git clone https://bitbucket.corp.itradenetwork.net//PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Configure app

Open `/proxy.config.json` then edit it with your settings. You can edit these settings to configure proxies for local development.

## Running the project
    
    $ npm start

## Simple build for production
    $ npm build
