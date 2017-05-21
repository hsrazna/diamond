(function($){
 $.fn.extend({
        customStyleAuto : function(options) {
   if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
   return this.each(function() {
                      
   var currentSelected = $(this).find(':selected');
   $(this).after('<span style="width='+(options.width - 50)+'px;" class="select"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
   var selectBoxSpan = $(this).next();
   var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));
   var selectBoxSpanInner = selectBoxSpan.find(':first-child');
   selectBoxSpan.css({display:'inline-block',width:(options.width - 0)});
   selectBoxSpanInner.css({width:options.width, display:'inline-block'});
   var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
   $(this).height(27).change(function(){
    selectBoxSpanInner.text($('option:selected',this).text()).parent().addClass('changed');
   });
 
   });
   }
 }
        
 });
})(jQuery);