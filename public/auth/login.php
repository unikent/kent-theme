<?php
require_once dirname(dirname(dirname(__FILE__)))."/lib/bootstrap.php";

if(defined("ENV") && ENV !=="dev") {
	$saml_include = defined("SIMPLE_SAML_INCLUDE_PATH")?SIMPLE_SAML_INCLUDE_PATH:"simplesamlphp/lib/_bootstrap.php";
	require_once $saml_include;
}

$returnTo = isset($_REQUEST["returnTo"]) ? $_REQUEST["returnTo"] : HOME_URL;

if(defined("ENV") && ENV !=="dev") {
	$sp = defined("SIMPLE_SAML_SP") ? SIMPLE_SAML_SP : 'default-sp';
	$saml = new SimpleSAML_Auth_Simple($sp);

	if(!$saml->isAuthenticated()) {
		$saml->requireAuth([
							   'ReturnTo' => HOME_URL . "/auth/process.php?returnURL=" . $returnTo
						   ]);
	}else{
		include "process.php";
	}
}else{
	include "process.php";
}

