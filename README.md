# react boilerplate

### Quick start
To start a new app, run:
```
npm install
npm run strat
```
Then open http://localhost:8000/ to see your app in the browser.

### Local setup
* Run eslint `eslint src`,
* Run app in precommit mode `npm run eslint`,
* Run app in start mode `roadhog server`,
* Run app in build mode `roadhog build`,

### Project Structure
```
├── mock
│   └── index.js
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── fonts.css
│   │   ├── fonts
│   │   │   ├── cruise.svg
│   │   │   ├── cruise.ttf
│   │   │   └── cruise.woff
│   │   └── imgs
│   │       ├── cent_os.png
│   │       ├── debin.png
│   │       ├── logo.svg
│   │       ├── suse.png
│   │       ├── ubuntu.png
│   │       ├── user.jpg
│   │       └── windows.png
│   ├── components
│   │   ├── Agents
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   ├── Dialog
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   ├── Header
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   ├── Layout
│   │   │   ├── index.js
│   │   │   └── style.less
│   │   └── Nav
│   │       ├── index.js
│   │       └── style.less
│   ├── index.css
│   ├── index.js
│   ├── models
│   │   ├── agents.js
│   │   └── layout.js
│   ├── router.js
│   ├── routes
│   │   ├── Agents.js
│   │   └── Layout.js
│   ├── services
│   │   ├── agent.js
│   │   └── index.js
│   └── utils
│       ├── index.js
│       └── request.js
└── tree.text

17 directories, 38 files


```