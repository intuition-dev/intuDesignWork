
!['Slider'](slick.jpg)

## The last carousel you'll ever need &#169;

The slogan of **Slick** slider library is _'the last carousel you'll ever need'_, I completely agree with it.
I reckon that Slick slider is the simpliest library among the sliders libraries to figure out how it works and set up a slider in ~10 minutes and then some more time to style it up to your needs.
Slick documentation is pretty straight forward to understand.
Before I got to know about slick, I always wasn't convenient to do a simple slider, because in all sliders JS libraries I've faced before there were tons of settings which is very complicated or lack of that settings, but slick is as simple to set up as I ever faced up with  in another sliders libraries.

### Include Slick library in your project

1. Download `.css` and `.js` from [here](http://kenwheeler.github.io/slick/) 
  or use from CDN.

2. Include these files to your project's `head` (_**note**: I'm using `pug` the html template engine instead of regular html_):

```html
link(rel="stylesheet", type="text/css", href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css")

script(type="text/javascript", src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js")
				
```

### Usage

1. All you need is to define somewhere in script your slider, specifying the class of wrapper element of your slider:
```js
$('.my-custom-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
```

2. Then create html for your slider: a wrapper with the class specified in a script and slides items itself:

```html
  div.my-custom-slider
    div your 1 slide's content
    div your 2 slide's content
    div your 3 slide's content
```
3. That's it! With this minimum your slider will work.

### Settings

Right away you can specify how much sliders per slide you want to show, eg:
```js
slidesToShow: 3
```
or how many slides at a time to scroll:
```js
slidesToScroll: 3
```
or to make your slides never ending, showing in a loop:
```js
infinite: true
```
or even make your slider **right-to-left**:
```js
rtl: true
```

There are available more useful settings, like centered slider, lazy load slides, etc, on [slick slider documentaion](http://kenwheeler.github.io/slick/)

Also Slick slider is fully **responsive**, and you can additionaly specify different settings per each resolution of screen if needed, eg:
```js
$('.responsive').slick({
  .
  .
  .
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
```