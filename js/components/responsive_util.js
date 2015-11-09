(function($, viewport){

    var visibilityDivs = {
        'xs': $('<div class="hidden-sm-up"></div>'),
        'sm': $('<div class="hidden-xs-down hidden-md-up"></div>'),
        'md': $('<div class="hidden-sm-down hidden-lg-up"></div>'),
        'lg': $('<div class="hidden-md-down hidden-xl-up"></div>'),
        'xl': $('<div class="hidden-lg-down"></div>')
    };

    viewport.use('Custom', visibilityDivs);

})(jQuery, ResponsiveBootstrapToolkit);