(function() {
  (function($) {
    return $('#filter').keyup(function(event) {
      var $el, rex;
      $el = $(event.target);
      rex = new RegExp($el.val(), 'i');
      $('.org-type').show();
      $('.org-type .org').hide();
      $('.org-type .org').filter(function() {
        return rex.test($(this).text());
      }).show();
      return $('.org-include').each(function(i, include) {
        var $include;
        $include = $(include);
        $("#" + ($include.attr("id")) + " .org-type").each(function(i, type) {
          var $type;
          $type = $(type);
          if ($("#" + ($type.attr("id")) + " .org:visible").length === 0) {
            return $type.hide();
          } else {
            return $type.show();
          }
        });
        if ($("#" + ($include.attr("id")) + " .org:visible").length === 0) {
          return $include.children('.no-matches').show();
        } else {
          return $include.children('.no-matches').hide();
        }
      });
    });
  })(jQuery);

}).call(this);
