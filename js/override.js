$(document).ready(function() {

$( ".controlink" ).click( function( event ) {
    var $target =  $( event.currentTarget ),
    url     = $target.attr( "url" );

    switch ( url ) {
        case "setting":
        if ( !$target.hasClass( "close" )) {
            var width = 280;

            $( ".setting" ).animate({ "width": width, opacity : 0.8 }, 200, function() {
                $target.addClass( "close" );
            });

        }
        else {
            $( ".setting" ).animate({ width: 0, opacity : 0 }, 200, function() {
                $target.removeClass( "close" );
            });
        }
        default:
        console.log('No match');
    }
})   


function update() {
  // var items = '["' + $('.item .content').map(function() {

  //   return $(this).text().replace(/[\n\r\t]/g, "").replace(/(\\\"|\")/g, '\\"');
  // }).get().join('", "') + '"]';
  // localStorage['wisbd'] = items;

  console.log("Added")
}


function newItem(str) {
  var clipitem = $('<div class="clipitem"><label>'+str+'</label></div>');
  // clipitem.find('.up').html("&uArr;");
  // clipitem.find('.down').html('&dArr;');
  // clipitem.find('.remove').text('X');
  return clipitem;
}

$('.clipitem').on('click',function(e){
    console.log(e.target.innerHTML);
})

  $('#newclip').bind('keyup', function(e) {
    // Handle new items
    if(e.keyCode == 13) {
      if($('#newclip').val() != '') {
       $('.clips').children().first().before(newItem($('#newclip').val()));
        update();
        $('#newclip').val('');
        e.preventDefault();
      }
    } else if (e.keyCode == 9) {
      if(e.shiftKey) {
        e.preventDefault();
        $('#newclip').parent().parent().prev('.item').children('.content').click();
        $(this).blur();
      } else {
        e.preventDefault();
        $('#clips').first().click();
        $(this).blur();
      }
    }
  })


});



