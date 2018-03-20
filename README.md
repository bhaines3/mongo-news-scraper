# Sports Scraper
News scraper app that uses cheerio to scrape a news site, mongodb to save news articles and comments, and express to serve the site and data.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
1. Install Node.js  (https://nodejs.org/en/download/)
2. Install mongoDB (https://www.mongodb.com/download-center#atlas)

### Installing
1. Clone the github repo using command line:
```
git clone https://github.com/bhaines3/mongo-news-scraper.git
``` 
2. Using command line go to the directory
```
cd mongo-news-scraper
3. Once in the ClassroomApp directory install the package.json 
```
npm install
```
5. Run the application
```
mongod
node server.js
```
6. If successfull you should see the following message on you command line, 
```
App listening on PORT 3000


## Deployment
Follow Heroku's deployment instructions
* https://devcenter.heroku.com/articles/git
* Add mLab MongoDB add-on

## Built With
* [MongoDB]
* [Node.js]
* npm packages
    - Body-parser
    - Morgan
    - Path
    - Axios
    - Cheerio
    - Express
    - Mongoose

## Authors
* **Brandon Haines** - [GitHub](https://github.com/bhaines3)

