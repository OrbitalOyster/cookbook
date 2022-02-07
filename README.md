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

# 3. Adding basic .env configuration

## Changes
* Installed dotenv
* Added .env and .env_sample files
* Added npm script to run app with configuration

## Features
* Configuration file

## Problems
* App finishes with exit code 130

# 4. Implementing graceful closing

## Changes
* Added close() function
* Added /close route

## Features
* App can now gracefully close

## Problems
* Can not add/edit/delete posts
* /close is public

# 5. Implementing basic REST features

## Changes
* JSON support
* Added POST route

## Features
* Can now view and add posts

## Problems
* Changes are temporary
