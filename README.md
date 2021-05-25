# NBA Radial Bracket

![](https://i.imgur.com/Gpr3CET.jpg)

# _[View Here](http://matvarughese.me/nba-radial-bracket/)_

## What is this

After seeing [this Reddit post](https://www.reddit.com/r/nba/comments/bgckp4/updated_2019_playoffs_radial_bracket_celtics/) I thought it would be a short fun project to create it in Javascript. The advantage of this would be it could live update and also show each year's playoff history.

## High Level Documentation

The front end uses a d3 partition layout to create the radial bracket. The back end scrapes a website, Basketball Reference, once a day and uploads data to Firebase. For more specific documentation, click the links or view the docs folder.

### Front End

Front end is a `d3` partition layout. It was definitely the harder part. I found [this](https://llimllib.github.io/roundbracket/) online, but it used a old version of d3 and was kind of confusing. However it pushed me in the right direction. View the docs [here](https://github.com/varughese/nba-radial-bracket/blob/master/docs/frontend.md).

### Back End

The flow of the backend is `Scrape` → `Parse` →`Transform`. Transforming was the hardest part, but not that bad. This is also stored in a function in `scraper.js`. View the docs [here](https://github.com/varughese/nba-radial-bracket/blob/master/docs/backend.md).

### Deployment

This uses Firebase so there is no hosted server. This is how the app is able to be hosted on Github Pages. Firebase Cloud functions are used to expose a url that can run the `getPlayoffData` function defined in `scraper.js` . Running `firebase deploy --only functions` deploys the functions specfied in the `functions/index.js` file as Firebase cloud functions. Then performing a `GET` to a specific url runs this function (which in turn scrapes the website and updates the database). Using `https://cron-job.org/`, I schedule a `GET` request to this URL once a day. I also have a `deploy` NPM script that builds the whole thing with webpack and pushes it to the GitHub pages branch.

Update: Firebase Cloud Functions stopped working because I ran out of credit, so I switched to using GitHub actions to run a function once a day.

And don't forget to trust the process. The Sixers are gonna win the Finals soon enough.

Update: 2 years later, still trusting the process...
