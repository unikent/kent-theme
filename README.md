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

[PhantomCSS](https://github.com/Huddle/PhantomCSS) tests are used to perform regression testing on UI components. You'll need to have python in your path and ```npm install -g casperjs``` to be able to run them. Run them with casperjs test ```test/phantomcss/tests.js```