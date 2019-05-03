# Back End Documentation

We `Scrape` → `Parse` →`Transform` → `Upload`.

## Scrape
I thought NBA data would be easily available but it was not. I ended up just scraping [Basketball Reference](https://basketball-reference.com/playoffs/NBA_2018.html). It is one request a day, so it is not a lot of request on their server. This was easy using `cheerio`.

## Parse
Parsing was pretty easy too. I just needed to loop through HTML tables and request the data.

## Transform
Converting an array of matches into a tree was kind of hard. Look at the `convertToTree()` method in `scraper`.