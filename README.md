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

### Build to publish

```bash
yarn build:v2 # Firefox requires manifest v2
yarn build:v3 # Chrome/Edge require manifest v3
yarn build:safari # Requires MacOS and xcode!
```

### Installation

#### Mozilla Firefox:

* https://addons.mozilla.org/de/firefox/addon/typo3-tdk-gitpod-integration/

#### Microsoft Edge:

* https://microsoftedge.microsoft.com/addons/detail/typo3-tdk-gitpod-integrat/ffphfaaoaalmjhndekiopmkacelbfleh

#### Google Chrome:

* https://chrome.google.com/webstore/detail/typo3-tdk-gitpod-integrat/kbneemgnlgbgifpnhikifmjcjbblpnmd

#### Apple Safari:

* https://github.com/ochorocho/tdk-gitpod-addon/releases/tag/v1.1.0

Download the `TYPO3-TDK-GitPod-v1.1.0.dmg` file and open it. Move the App file to the `Applications` folder.
Go to the `Applications` folder and double-click the `TYPO3 TDK GitPod Integration.app` -> "Quit and Open Safari Extensions Preferences..."
To finally enable the Extension in Safari go to the top bar menu and open `Develop` and click on `Allow unsigned Extensions`.
See [Safari docs](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension#2957925) for details
