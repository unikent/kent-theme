<?php if(date("Y-m-d", $start) == date("Y-m-d", $end)):?>
	<time class="event-meta event-meta-<?php echo $colour; ?>" datetime="<?php echo date("c", $start); ?>">
		<?php echo date("M", $start); ?>
		<span><?php echo date("j", $start); ?></span>
	</time>
<?php elseif(date("Y-m", $start) == date("Y-m", $end)):?>
	<time class="event-meta event-meta-<?php echo $colour; ?>" datetime="<?php echo date("c", $start); ?>">
		<?php echo date("M", $start); ?>
		<span><?php echo date("j", $start); ?> &ndash; <?php echo date("j", $end); ?></span>
	</time>
<?php else: ?>
	<time class="event-meta event-meta-multi event-meta-<?php echo $colour; ?>" datetime="<?php echo date("c", $start); ?>">
		<?php echo date("j M", $start); ?><br/>&ndash;<br/>
		<?php echo date("j M", $end); ?>
	</time>
<?php endif; ?>