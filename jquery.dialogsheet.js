$(function() {
  var $dialogSheets = $('div.dialog-sheet');
  var $dialogSheetLinks = $('a.dialog-sheet');
  var $dialogSheetShadow = $('<div class="dialog-sheet-shadow"/>');
  
  $(document.body).append($dialogSheetShadow);
  
  $dialogSheets.delegate('.btn.dismiss', 'click', function(evt) {
    var $this = $(this);
    var $dialogSheet = $this.closest('div.dialog-sheet');
    
    $dialogSheet.removeClass('active');
    evt.preventDefault();
  });
  
  $dialogSheetLinks.bind('click', function(evt) {
    var $this = $(this);
    var $dialogSheet = $($this.attr('href'));
    
    $dialogSheet.addClass('active');
    evt.preventDefault();
  });
  
  $(window).bind('keyup', function(evt) {
    if (evt.keyCode === 27) {
      $('div.dialog-sheet.active').removeClass('active');
    }
  });
});
