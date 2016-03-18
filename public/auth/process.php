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

	if($saml->isAuthenticated()) {

		$attrs = $saml->getAttributes();

		setcookie('kent_jwt',$attrs['jwt'],null,"/");
		header("Location: " . $returnTo);
		exit();
	}else{
		header("Location: " . HOME_URL . "auth/login.php?returnTo=" . $returnTo);
		exit();
	}
}else{
	$jwt = file_get_contents(dirname(dirname(dirname(__FILE__))) . "/jwt_example.json");
	setcookie('kent_jwt',$jwt,null,"/");
	header("Location: " . $returnTo);
	exit();
}