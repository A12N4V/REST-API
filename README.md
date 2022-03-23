# REST-API
<hr>A simple REST API made with NodeJs and express<hr>
Made with: 
<br><br>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge" />
<img alt="Express" src="https://img.shields.io/badge/Express-green?style=for-the-badge&logo=express" />
<img alt="Mongo DB" src="https://img.shields.io/badge/mongodb-green?style=for-the-badge&logo=mongodb" />

<hr>

## How to set up the API

First clone the project. Then, Install the required modules.

```sh
git clone https://github.com/A12N4V/REST-API.git
cd REST-API
npm i
node app.js
```

The Api can now be accessed at ```localhost:8080/posts```
Since it's a REST API, you can<br>
Read all the posts with ```GET``` request on ```localhost:8080/posts``` or read a specific post with  ```GET``` request on ```localhost:8080/posts/TITLE OF POST```<br>
Create a post with ```POST``` request on ```localhost:8080/posts``` with data including a title and content like this:
```
data = {
  "title": "TITLE OF POST",
  "content": "CONTENT OF THE POST"
```
<br>

Delete all the posts with ```DELETE``` request on ```localhost:8080/posts``` or delete a specific post with ```Delete``` request on ```localhost:8080/posts/TITLE OF POST```<br>
Update a request with ```PUT``` or ```patch``` by sending data including a title and content that will replace the current data of the post
