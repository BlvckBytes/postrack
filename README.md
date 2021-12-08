# Postrack

Polling tracker app for austrian-post parcel-service tracking numbers

## Introduction

I usually send and receive quite a lot of packages using austrian-post, which is why I want to have an app where I can do the following:

* Enter tracking numbers with corresponding short-names and optional descriptions
* Have that list saved on the device for quick access
* Poll in the background to find updates by diffing
* Then spawn a new notification on the device
* Put old numbers in an archive for later access
* Lists have sortable order
* Items are colorable
* Some kind of backup mechanism, probably just local file I/O
* And thus: **no** backend.

With two main requirements:

* Web-App (serviceworker), no playstore installable heavyweight kind of app
* Beautiful GUI, of course, with great UX, fast and non-obnoxious

## Proxying

Sadly, austrian post sets CORS headers on their GraphQL REST-Endpoint, which is why I need to proxy the request through my own proxy. Username and password are saved in `.env`, and generated into angular environment-files pre-start and pre-build. You can just use your own proxy and yank all of that right out of the project, if you so desire.
