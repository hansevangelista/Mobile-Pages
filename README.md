## Mobile Pages
Simple swipe pages layout for starting web-mobile projects. [Demo](http://hanshavin.github.io/Mobile-Pages/)

### Usage
Create the basic html structure:

* A container element which will fill the screen of the device.
* Page elements that will reside inside the container.

Html tags and classnames may be changed *however* you want. This library will check for the classname of the container you provide and will assume each child is a page. Here is an example:

``` html
<body>
	<div class="wrapper">
		<div class="page--1">
			<!-- Page 1 content -->
		</div>
		<div class="page--2">
			<!-- Page 2 content -->
		</div>
		<div class="page--3">
			<!-- Page 3 content -->
		</div>
	</div>
</body>
```

Include the mpages.css and mpages.js files in your project.

``` html
<link rel="stylesheet" type="text/css" href="mpages.css">
```

``` html
<script type="text/javascript" src="mpages.js"></script>
```

Create the MPages object from javascript using these 2 parameters:

* The container classname.
* A JSON object for configuration.

``` js

window.mPages = new MPages(document.querySelector('.wrapper'), {
	timeSlide: 500,
	initPage: 1
})
```

### Config Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
timeSlide | int | 500 | Transition duration
initPage | int | 0 | Index of the page to be shown at startup *(Zero-based indexing)*

### License
Copyright (c) 2014 [Hans Evangelista](https://twitter.com/hanshavin_code) Licensed under the [The MIT License (MIT)](http://opensource.org/licenses/MIT).