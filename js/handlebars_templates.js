this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["video_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"embed-responsive-item-overlay\">\r\n					<span class=\"video-transcript\"><small><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.transcript || (depth0 != null ? depth0.transcript : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"transcript","hash":{},"data":data}) : helper)))
    + "\">Download transcript</a></small></span>\r\n				</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal fade modal-fullscreen\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myVideoModalLabel\" aria-hidden=\"true\">\r\n	<div class=\"modal-dialog\" role=\"document\">\r\n		<div class=\"modal-content modal-content-transparent\">\r\n\r\n			<div class=\"modal-header\">\r\n				<button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n					<span aria-hidden=\"true\"><i class=\"kf-close\"></i></span>\r\n					<span class=\"sr-only\">Close</span>\r\n				</button>\r\n			</div>\r\n\r\n			<div class=\"embed-responsive embed-responsive-16by9 \">\r\n				<video class=\"embed-responsive-item\">\r\n					<source src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" >\r\n				</video>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.transcript : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n			\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});