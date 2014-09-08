Location History Mapper
=======================

This is a javascript app to show your Google location history on a heatmap.


Using it
--------

- Clone this repo somewhere.

- Grab your location history using [Takeout](https://www.google.com/settings/takeout) as a `.zip`. Pull the `LocationHistory.json` file out of there and move it into the project's root directory, wherever you cloned it.

- Run `python -m SimpleHTTPServer <port number>` in the root directory of the project

- Go to `http://localhost:<port number>` in your web browser. It might take a little while to load and then render the data if you have a lot of location history.


License
-------

MIT
