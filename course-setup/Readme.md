Run command -> npm init
which gives package.json file then install lite-server

Run command -> npm install --save-dev lite-server

server helps to reload the page index.html if any changes are there which help us to se UI changes quickly.



----
html 5 -> index.html shortcut to create html skeleton

---

ghouse@Mahammads-MBP course-setup % npm start

> course-setup@1.0.0 start
> lite-server

Did not detect a `bs-config.json` or `bs-config.js` override file. Using lite-server defaults...
** browser-sync config **
{
  injectChanges: false,
  files: [ './**/*.{html,htm,css,js}' ],
  watchOptions: { ignored: 'node_modules' },
  server: {
    baseDir: './',
    middleware: [ [Function (anonymous)], [Function (anonymous)] ]
  }
}
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.122:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: ./
[Browsersync] Watching files...
23.08.15 17:04:59 200 GET /index.html
23.08.15 17:04:59 200 GET /app.js
23.08.15 17:04:59 404 GET /favicon.ico
[Browsersync] Reloading Browsers...
23.08.15 17:06:16 304 GET /index.html
23.08.15 17:06:16 200 GET /app.js