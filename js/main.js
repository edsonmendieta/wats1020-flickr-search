$(document).ready(function(){

  
    var searchImages = function(tags){
      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      $.getJSON(flickrAPI, {
        tags: tags,
        tagmode: "any",
        format: "json"
      })
       .done(function(data){
        $('#images').empty();
        $.each(data.items, function(i, item){
        var newListItem = $("<li>")
        var thumbnail = $('<img/>').attr("src", item.media.m).appendTo(newListItem);
        var newButton = $("<button class='btn btn-sm btn-primary enlarge'>enlarge</button>").attr({
          'data-title': item.title,
          'data-toggle': "modal",
          'data-target': "#infoModal",
          'data-imgsrc': item.media.m,
          'data-description': item.description,
          'type': "button"
        }).appendTo(newListItem);
        newListItem.appendTo("#images");
        if (i === 15) {
          return false;
        }
        })
        })
      }
      
    
$('button.search').click(function(event){
    event.preventDefault();
    var searchTextInput = $(event.target.parentElement).find('input[name="searchText"]')[0];
    console.log(searchTextInput);
    searchImages(searchTextInput.value);
  });
  
  
  
  
    $('#infoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.data('title'); // Extract info from data-* attributes
    var imgSrc = button.data('imgsrc');
    var imageDescription = button.data('description');

    // Update the modal's content. We'll use jQuery here.
    var modal = $(this);
    modal.find('.modal-title').html(title);
    var modalBody = modal.find('.modal-body');
    modalBody.empty();
    var modalDescription = $("<p class='image-description'>").html(imageDescription).appendTo(modalBody);
  });

  
  $(".poop").fitText();
  
});
  



});
