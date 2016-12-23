
import List from './list';


const main = function dummy() {
  const list = new List('stuff');
  const x = 1;
  console.log(x);
  console.log(list);
  console.log(list.myMethod());
};

window.addEventListener('load', main);

/*
$(function() {
    console.log( "ready!" );

  var url = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=024a137e692e59cf1392e00dad1c486e&format=json&nojsoncallback=1&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=100&page=7&date=2016-12-20&viewerNSID=&csrf=&hermes=1&hermesClient=1';

  $.ajax({
  url: url
  }).done(function(data) {
  console.log(data);
  })

});
*/
