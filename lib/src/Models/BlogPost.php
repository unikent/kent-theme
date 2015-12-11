<?php
namespace unikent\kent_theme\Models;

use Carbon\Carbon;

class BlogPost
{
    protected $title;
    protected $permalink;
    protected $date;
    protected $image;

    public function __construct(array $attributes)
    {
        foreach ($attributes as $name => $attribute) {
            $this->{$name} = $attribute;
        }
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getPermalink()
    {
        return $this->permalink;
    }

    public function getDate($format = 'j F Y')
    {
        return Carbon::parse($this->date)
            ->format($format);
    }

    public function getImage($size)
    {
        return array(
            'title'       => $this->featured_image['title'],
            'alt'         => $this->featured_image['alt_text'],
            'url'         => $this->featured_image['sizes'][$size]['url'],
            'attribution' => $this->featured_image['attribution']
        );
    }
}
