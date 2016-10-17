<nav class="breadcrumb <?php echo isset($config['class']) ? $config['class']:'' ; ?>">
	<a href="<?php echo HOME_URL; ?>" rel="index">University of Kent</a>

	<?php $i=0;foreach($breadcrumb as $name => $link): ?>
		<?php if(empty($link)): ?>
			<span><?php echo $name; ?></span>
		<?php else:?>
			<a href="<?php echo $link; ?>" rel="up"><?php echo $name; ?></a>
		<?php endif;?>
	<?php endforeach;?>
</nav>