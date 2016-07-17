  $(function(){

    $('#userRequest').click(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });

  });

  function getRequest(searchTerm) {
      var params = {
        id: 'id',
        part: 'snippet',
        key: 'AIzaSyCq6mh1pSWRIEyxOXuZGoJpRMuqVePmM-4',
        q: searchTerm
      };
      url = 'https://www.googleapis.com/youtube/v3/search';

      $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items);
    });
  }

  function showResults(results) {
    var displayResult = "";
    $.each(results, function(index,value) {
        var url;
        if (value.id.channelId) {
          url = "https://www.youtube.com/channel/" + value.id.channelId;
        } else {
          url = "https://www.youtube.com/watch?v=" + value.id.videoId;
        }
        displayResult += '<p>' + '<a target="_blank" href=' + url + '>' + value.snippet.title + '</a>' + '</p>' + '<img src=' + value.snippet.thumbnails.default.url + '>';
    });
    $('#search-results').html(displayResult);

  }
