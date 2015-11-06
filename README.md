# The Kent Theme

## Setup

Run the following command
```
npm install
```
this will install all dependancies, run grunt and start a watch task.

To restart the watch for any reason simply use
```
grunt
```

## Testing

[PhantomCSS](https://github.com/Huddle/PhantomCSS) tests are used to perform regression testing on UI components. You'll need to have python in your path and ```npm install -g casperjs``` to be able to run them.

Run the tests with ```casperjs test test/phantomcss/tests.js```

PhantomCSS will generate a new set of images and compare them with the ones in ```test/phantomcss/screenshots```. The resulting images and diffs with the placed in ```test/phantomcss/results``` and ```test/phantomcss/failures```.

To generate a fresh copy of the base images to compare with (in ```test/phantomcss/screenshots```), run ```casperjs test test/phantomcss/tests.js --rebase```

