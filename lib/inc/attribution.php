<?php
//ensure everything is an array
$image = json_decode(json_encode($image), true);

if(!empty($image) && isset($image['attribution']) && (!empty($image['attribution']['author']) || !empty($image['attribution']['license']))){

	$attribution = '<div class="attribution"><i class="kf-camera"></i><span class="attribution-text">';
	if(!empty($image['title'])) {
		$attribution .= $image['title'] . ' : ';
	}
	if(!empty($image['attribution']['author'])){
		$attribution .= 'Picture by ';
		if(!empty($image['attribution']['link'])) {
			$attribution .= '<a href="' . $image['attribution']['link'] . '">';
		}
		$attribution .= $image['attribution']['author'];
		if(!empty($image['attribution']['link'])) {
			$attribution .= '</a>';
		}
		$attribution .= '.';
	}
	if(!empty($image['attribution']['license'])) {
		$attribution .= ' <a href="' . $image['attribution']['license'] . '">Licence</a>';
	}
	$attribution .= '</span></div>';
	echo $attribution;
}
