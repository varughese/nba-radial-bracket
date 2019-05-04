# NBA Radial Bracket
![](https://i.imgur.com/Gpr3CET.jpg)

# *[View Here](http://matvarughese.me/nba-radial-bracket/)*

## What is this
After seeing [this Reddit post](https://www.reddit.com/r/nba/comments/bgckp4/updated_2019_playoffs_radial_bracket_celtics/) I thought it would be a short fun project to create it in Javascript. The advantage of this would be it could live update and also show each year's playoff history.

## High Level Documentation
The front end uses a d3 partition layout to create the radial bracket. The back end scrapes a website, Basketball Reference, once a day and uploads data to Firebase. For more specific documentation, click the links or view the docs folder.

### Front End
Front end is a `d3` partition layout. It was definitely the harder part. I found [this](https://llimllib.github.io/roundbracket/) online, but it used a old version of d3 and was kind of confusing. However it pushed me in the right direction. View [here](https://github.com/varughese/nba-radial-bracket/blob/master/docs/frontend.md).

### Back End
The flow of the backend is `Scrape` → `Parse` →`Transform`. Transforming was the hardest part, but not that bad. View [here](https://github.com/varughese/nba-radial-bracket/blob/master/docs/backend.md).

And don't forget to trust the process. The Sixers are gonna win the Finals soon enough.
