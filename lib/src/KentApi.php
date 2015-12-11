<?php
namespace unikent\kent_theme;

use Guzzle\Http\Client as Guzzle;
use unikent\kent_theme\Models\BlogPost as Post;

class KentApi
{
	protected $guzzle;

	public function __construct()
	{
		$this->guzzle = new Guzzle(API_URL);
	}

	protected function get($url)
	{
		$request = $this->guzzle->get($url);
		$request->addHeader('Content-Type', 'application/json');
		$response = $request->send();

		return $response->json();
	}

	public function getPostsByTag($tag)
	{
		$url = "blogs/webdev/tags/$tag";
		$response = $this->get($url);

		$posts = [];
		foreach ($response['posts'] as $post) {
			$posts[] = new Post($post);
		}

		return $posts;
	}
}
