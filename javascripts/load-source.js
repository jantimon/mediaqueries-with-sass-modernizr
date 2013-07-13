jQuery(function($){

	var brushes = { 'scss' : 'sass' };
	var requests = [];
	$("code")
		.filter(function(){
			var matches = /^\s*([a-z0-9.\/]+\.([a-z0-9]+))\s*$/.exec($(this).html());
			return matches && ($(this).data('highlight', {'file' : matches[1], 'brushes' : (brushes[matches[2]] || matches[2]) }) || true);
		})
  .addClass("shadow")
	.each(function(){
		requests.push($.ajax({
			url: $(this).data('highlight').file,	
			dataType: 'text',
			success: $.proxy(function(data){
				$("<pre/>")
					.addClass("brush: " + $(this).data('highlight').brushes)
					.insertBefore($(this))
					.text(data);
			}, this)
			}));
		});
		
	$.when(requests).done(function(){
		$.getScript("javascripts/shCore.js", function(){
			$.when(
				$.getScript("javascripts/shBrushJScript.js"),
				$.getScript("javascripts/shBrushCSS.js"),
				$.getScript("javascripts/shBrushSASS.js")				
			).done(function(){
				SyntaxHighlighter.highlight();
			});
		});		
	});
	
});
