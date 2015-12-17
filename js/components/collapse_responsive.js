jQuery(document).ready(function(){

    viewport = ResponsiveBootstrapToolkit;

    var $collabsables = $('[data-toggle="collapse_responsive"]');

    $collabsables.click(function(e){
        e.preventDefault();

        var $this= $(this);
        var isCollapsed = $(this).hasClass('collapsed');
        var $parent = $($this.data('parent') || null);
        var $target = $($this.data('target') || null);

        // If target isn't collapsed at this breakpoint, ignore.
        if( 
            !(
                ($target.hasClass('collapse-xl-down') && viewport.is('<=xl')) ||
                ($target.hasClass('collapse-lg-down') && viewport.is('<=lg')) ||
                ($target.hasClass('collapse-md-down') && viewport.is('<=md')) ||
                ($target.hasClass('collapse-sm-down') && viewport.is('<=sm')) ||
                ($target.hasClass('collapse-xs-down') && viewport.is('<=xs'))
            )
        ){
            return;
        }
        // else, toggle it open / shut

        if($parent.length > 0){
            var $open = $parent.find('.in');
            $open.removeClass('in')
                .each(
                    function(){
                        $parent.find('[data-target="#' + $(this).attr('id') + '"]').addClass('collapsed');
                    }
            );
        }

        if($target.length > 0){
            $target.toggleClass('in',isCollapsed);
            // Add expanded state (this only needs to be set when collapsing is possible)
            $this.toggleClass('collapsed',!isCollapsed).attr("aria-expanded", isCollapsed);
        }
    });


    $(window).on("viewport:change", function(){

        $collabsables.each(function(){
            var $target = $($(this).data('target') || null);

            if( 
                !(
                    ($target.hasClass('collapse-xl-down') && viewport.is('<=xl')) ||
                    ($target.hasClass('collapse-lg-down') && viewport.is('<=lg')) ||
                    ($target.hasClass('collapse-md-down') && viewport.is('<=md')) ||
                    ($target.hasClass('collapse-sm-down') && viewport.is('<=sm')) ||
                    ($target.hasClass('collapse-xs-down') && viewport.is('<=xs'))
                )
            ){
                // Remove expanded state for none collapsible elements
                $(this).attr("aria-expanded", "");
            }
        });
    });


});