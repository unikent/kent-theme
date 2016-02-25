this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["video_inline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"video"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "Inline\" class=\"embed-responsive embed-responsive-16by9\">\r\n	\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["video_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span class=\"video-transcript\"><small><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.transcript || (depth0 != null ? depth0.transcript : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"transcript","hash":{},"data":data}) : helper)))
    + "\">Download transcript</a></small></span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal fade modal-fullscreen\" id=\"video"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "Modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"videoModalLabel"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\">\r\n	<div class=\"modal-dialog\" role=\"document\">\r\n		<div class=\"modal-content modal-content-transparent\">\r\n\r\n			<div class=\"modal-header\">\r\n				<button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n					<span aria-hidden=\"true\"><i class=\"kf-close\"></i></span>\r\n					<span class=\"sr-only\">Close</span>\r\n				</button>\r\n			</div>\r\n\r\n			<div class=\"video-container\">\r\n				\r\n			</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.transcript : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});