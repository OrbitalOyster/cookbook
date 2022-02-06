Step-by-step instructions on how to build basic blogging platform

# 1. Initial commit
Empty "Hello, World!" package

## Features
None

## Problems
Nothing works

# 2. Adding express framework

## Changes
* Added .gitignore
* Installed express
* Set package type to "module"
* Rewrote index.js
* Added test.rest (for vscode REST Client extension testing)

## Features
App now accepting GET requests

# 3. Implementing basic REST features

## Changes
* JSON support
* Added POST route

## Features
* Can now view and add posts

## Problems
* Cannot store posts
* Cannot delete posts
* Cannot edit posts

# 4. Adding basic .env configuration

## Changes
* Installed dotenv
* Added .env and .env_sample files
* Added npm script to run app with configuration

## Features
* Configuration file

# 5. Adding mongodb connection

## Changes
* Installed mongoose
* Added configuration to .env for mongodb connection
* Added mongodb connection before app starts

## Features
* App now connects to mongodb

## Problems
* No graceful disconnect from mongodb
