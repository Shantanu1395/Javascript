
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetStr = document.querySelector('#street').value;
    
    var cityStr = document.querySelector('#city').value;
    var address = streetStr + ', ' + cityStr;
    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src= "' + streetviewUrl + '"> ');

    // NYtimes AJAX request 
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "39accc4fe89046feb86a145b585e7a5a"
    });
    $.getJSON(url, function (data){
       $nytHeaderElem.text("This articles is about "+ cityStr);
       articles = data.response.docs;
       console.log(articles); 
       for (var i = 0; i < articles.length; i++){
           var article = articles[i];
           $nytElem.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>' + '</li>');
       }
    }).error(function() {
        alert( "Handler for .error() called." )
      });
    return false;
};

$('#form-container').submit(loadData);
