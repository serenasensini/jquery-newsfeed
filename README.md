# jquery-newsfeed
A simple JQuery plugin to feed news using https://newsapi.org.

> Based on this [repo](https://github.com/SmItH197/jquery-news), tested with _JQuery 3.3.1_

# jQuery NewsFeed

jQuery NewsFeed is a plugin that retrieves the latest news on a given topic from different sources, and list them.

## Features

* Choose a topic and retrieve data
* Choose a number of maximum items to retrieve
* Choose the sources originating the news

## How to use it

1. Include the `newsfeed.js` in your sourcelist.
2. Create a list in your HTML page with an <ul> tag, using "news" as tag class.
3. Use the following code to get the news.


        <script>
            $('.news').newsReader({
                //topic:"food",
                //number_of_items:"10"
                //sources:["google-news"]
            });
        </script>
