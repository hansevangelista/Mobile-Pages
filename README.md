## Mobile Pages
Simple swipe pages layout for init web-mobile projects
[Demo](http://hanshavin.github.io/Mobile-Pages/)

### Usage
Create the basic html structure: a container *(wrapper)* which will fill the screen of the device and into the elements *(pages--&)* that will be the pages.

The tangs and the names of these classes may change that you want. Here is an example:

``` html
<body>
	<div class="wrapper">
		<div class="page--1">
			<p class="title">Page 1</p>
		</div>
		<div class="page--2">
			<p class="title">Page 2</p>
		</div>
		<div class="page--3">
			<p class="title">Page 3</p>
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

Create MPages object from javascript using 2 parameters: the container *(wrapper)* object and a json object configuration.

``` js
window.mPages = new MPages(document.querySelector('.wrapper'), {
	timeSlide: 500,
	initPage: 1
})
```

### Config Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
timeSlide | int | 500 | Duration of change of pages
initPage | int | 0 | Page that will be visible when you start the application *(counting from 0 for the first page)*

### License
Copyright (c) 2014 [Hans Evangelista](https://twitter.com/hanshavin_code) Licensed under the [The MIT License (MIT)](http://opensource.org/licenses/MIT).
