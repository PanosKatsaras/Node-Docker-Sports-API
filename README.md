# Sports News API

## Overview
Welcome to the Sports News API! This project provides developers with a straightforward solution for accessing real-time sports news articles from newspapers worldwide. 

## Features

Global Coverage: Fetch sports news from reputable newspapers around the world, offering a diverse and comprehensive collection of articles.

## Tech Stack

### Node.js (v20.11.0):

Backend runtime for handling API requests.

### Express.js (4.18.2):

Web application framework for building robust and flexible APIs.

### Axios (1.6.7):

HTTP client for making requests to fetch news articles from various sources.

### Cheerio (1.0.0-rc.12):

A lightweight, fast, and flexible implementation of jQuery for parsing HTML. Used for scraping news articles.

## Getting Started

### Clone the Repository:
bash
Copy code
git clone [https://github.com/your-username/sports-news-aggregator-api.git](https://github.com/PanosKatsaras/Node-Docker-Sports-API.git)

### Install Dependencies:
bash
Copy code
npm install

### Run the API:
bash
Copy code
node index.js
The API will be accessible at http://localhost:8000.

### Fetch All Sports News:
Open your browser or use a tool like cURL to access http://localhost:8000/news and retrieve all sports news articles.

### Fetch Specific Article:
Use http://localhost:8000/news/id to fetch a specific article by replacing id with the article's unique identifier.

### Docker Support
This project can be containerized for easy deployment.
