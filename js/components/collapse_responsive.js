jQuery(document).ready(function(){

    viewport = ResponsiveBootstrapToolkit;

    function updateCollapseAriaState(){
        console.log(viewport.current());
        var vpHiddenClasses=[];
        if(viewport.is('>=xs')) {
            vpHiddenClasses.push('.collapse-xs-up');
        }
        if(viewport.is('>=sm')) {
            vpHiddenClasses.push('.collapse-sm-up');
        }
        if(viewport.is('>=md')) {
            vpHiddenClasses.push('.collapse-md-up');
        }
        if(viewport.is('>=lg')) {
            vpHiddenClasses.push('.collapse-lg-up');
        }
        if(viewport.is('>=xl')) {
            vpHiddenClasses.push('.collapse-xl-up');
        }
        if(viewport.is('<=xs')) {
            vpHiddenClasses.push('.collapse-xs-down');
        }
        if(viewport.is('<=sm')) {
            vpHiddenClasses.push('.collapse-sm-down');
        }
        if(viewport.is('<=md')) {
            vpHiddenClasses.push('.collapse-md-down');
        }
        if(viewport.is('<=lg')) {
            vpHiddenClasses.push('.collapse-lg-down');
        }
        if(viewport.is('<=xl')) {
            vpHiddenClasses.push('.collapse-xl-down');
        }
        vpHiddenClasses = vpHiddenClasses.join(', ');
        $targets.attr('aria-expanded',true);
        $(vpHiddenClasses).not('.in').attr('aria-expanded',false);

    }

    var $collabsables = $('[data-toggle="collapse_responsive"]');
    var $targets = [];

    $collabsables.each(function(){
        $targets.push($(this).data('target'));
    });
    $targets = $targets.join(', ');

    $targets = $($targets);

    $collabsables.click(function(e){
        e.preventDefault();
        var $this= $(this);

        var isCollapsed = $(this).hasClass('collapsed');

        var $parent = $($this.data('parent') || null);


        if($parent.length > 0){
            var $open = $parent.find('.in');
            $open.removeClass('in')
                .each(
                    function(){
                        $parent.find('[data-target="#' + $(this).attr('id') + '"]').addClass('collapsed');
                    }
            );
        }

        var $target = $($this.data('target') || null);

        if($target.length > 0){
            $target.toggleClass('in',isCollapsed);
            $this.toggleClass('collapsed',!isCollapsed);
        }
        updateCollapseAriaState();
    });

    updateCollapseAriaState();

    $(window).on('viewport:change', function(){
        updateCollapseAriaState();
    });



});