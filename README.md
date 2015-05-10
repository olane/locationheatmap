Location History Mapper
=======================

This is a javascript app to show your Google location history on a heatmap.


Using it
--------

The app runs in your browser but it's intended to be run on a local server, since the location history file can be upwards of 100MB (and besides, you probably don't want to share it).

I'll assume working installs of bower and python. 

- Clone this repo somewhere.

- Run `bower install`

- Grab your location history using [Takeout](https://www.google.com/settings/takeout) as a `.zip`. Make sure to choose the JSON format. Pull `LocationHistory.json` out of the archive and move it into the project's root directory, wherever you cloned it. `LocationHistory.json` is in the `.gitignore` so you don't accidentally upload it.

- Run `python -m SimpleHTTPServer <port number>` in the root directory of the project

- Go to `http://localhost:<port number>` in your web browser. It might take a little while to load and then render the data if you have a lot of location history.


License
-------

MIT
