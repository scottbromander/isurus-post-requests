# the-express-express

## Base

Do all of your work in one file (`server.js`). No need to break things out into other files yet.

- Add a `.gitignore` file that ignores will not commit your `/node_modules` folder
- Bring `express` into your project using npm (see comments at top of server.js for help)
- Your application should run on `localhost:5000`
- the route `/` should return `welcome to the Express Express, the fastest train in the WESS`
- the route `/train` should return return the list of trains
- the route `/train/random` should return a random train from the list of trains


## Stretch

- Move the list of trains into `modules/trains.js`
- Move the `/train` routes into `routes/train.router.js`
- Moment is another common module for time. `npm install moment` and use it to show the time of the next train. Trains run every ten minutes starting at the top of the hour. So visiting `localhost:5000/train/next` at 2:35pm should should `2:40pm` as the result.