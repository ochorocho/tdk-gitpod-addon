# TYPO3 GitPod Review Addon

The TYPO3 addon aims to allow contributors to review
patches in a quick and easy way using GitPod.

So no local setup is required. Just got to review.typo3.org
and select a patch. Then click the shiny TYPO3 icon of your
browsers action toolbar. Choose settings and hit "Open in GitPod".
This will spin up an instance of TYPO3 with the selected patch
applied and ready for testing.

## How it works

The browser addon extracts the patch id of the browser location.
With this id the Gerrit API is called to get additional information
of a patch like available revisions. The username is also automatically detected
when a user is logged in.

When the user hits "Open in GitPod" a new tab opens with the selected
settings (patch id, revision, php version) passed to GitPod which then
uses [ochorocho/tdk](https://github.com/ochorocho/tdk) and ddev to
set up a composer based TYPO3 development environment in GitPod.

## ToDo

* Optimize speed. Currently, it takes 3 - 4 minutes till the GitPod is ready.
* Better feedback in case a patch was not applied correctly
* Publish the addon to the different browser markets
* Integrate GitHub workflow

## Development

```bash
git clone git@github.com:ochorocho/tdk-gitpod-addon.git
yarn install
yarn dev # will start a development instance of firefox with the addon installed
```

Folders

* `addon` - Static files. These files will automatically copied to `dist`
* `dist` - Automatically compiled files needed to run the addon (css, javascript) + static files + icons
* `icons` - SVG icons which will be saved as png and scaled down to different sizes (see manifest.json)
* `javascript` - Javascript classes
* `scss` - Scss sources
* `web-ext-artifacts` - final build location of the addon
