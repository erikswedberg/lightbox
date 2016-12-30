# lightbox

##building

* npm run lint
* npm run compile

##about

this loads photos from the flickr interestingness photo stream. clicking on thumbnails opens a lightbox that is navigable through arrows and the arrow keys.

the lightbox modal dialog itself is centered in the viewport and tracks to the top left corner if the contents of the modal dialog happen to be bigger than the screen. in that case, horizontal and vertical scrollbars will give the user the ability to inspect all the content in the large modal.

this was written with vanilla ES6 with no extra libraries.

tested in the latest versions of Chrome, Safari, Firefox, and IE.

##todo

* something like flickr's justified layout http://code.flickr.net/2016/04/05/our-justified-layout-goes-open-source/
* infinite scroll list
* preload large images so clicking right or left in the lightbox mode doesn't take too long

##demo

https://erikswedberg.github.io/lightbox/
