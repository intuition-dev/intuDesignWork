
<video controls>
  <source src="14bf6eab5c194dd58bfda4ca702cccb3.mp4" type="video/mp4">
</video>

## A little excurse in SEO

SEO stands for Search Engine Optimization. Including social media metadata in all new pieces of content allows you to optimize for sharing Twitter, Facebook, Google+ and Pinerest by defining exactly how titles, descriptions, images and more appear in social streams.

The right data, including optimized images, helps content to spread, which often leads to increased links and mentions. You can find many templates of SEO meta tags in the internet.

::: fixed-bg
::: sticky-element container light
## When your sites appear 
## on the first page 
## of major search engines
## your potential customers 
## are more likely to trust 
## your brand
:::
:::

## Using mbake and dat.yaml

For SEO you need to add the SEO html meta tags for each page in html `<head>` tag. So for each page you need to add different content to the SEO metatags. And what if you are using one layout for all pages? Then you need to use variables.

I will show how an example how I implemented this approach using using [mbake](https://github.com/metabake) and its `dat.yaml` file functionality.
In mbake each page has a `dat.yaml` file where any variables can be specified. And then in html this variables can be statically used.

In this example was used [pug](https://pugjs.org/api/getting-started.html) template engine, so instead of `html` code in all example will be `pug` code.

1. In `dat.yaml` file of a page I have variables with the content:

```js
.
.
.
pageTitle: Snowdrop
title: >-
  Snowdrop. Did you know: The Species name 'Galanthus' comes from the Greek
image: >-
  http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAOd1CI4oPfTryZpo_rAyZXf9ltuPAvRv45XPGDghPSLii5We
content_text: >-
  Galanthus is a small genus of about 20 species of bulbous perennial herbaceous plants in the family Amaryllidaceae. The plants have two linear leaves and a single small white drooping bell shaped flower with six petal-like tepals in two circles. The smaller inner petals have green markings.
  
.
.
.
```

2. Then in the layout file, I have code:

```html
doctype html
html(lang='en_US')
   head
      .
		.
		.

      title #{pageTitle}
      meta(name='description', content=content_text)

      //- Schema.org markup for Google+
      meta(itemprop='name', content=title)
      meta(itemprop='description', content=content_text)
      meta(itemprop='image', content=image)

      //- Twitter Card data
      meta(name='twitter:title', content=title)
      meta(name='twitter:description', content=content_text)
      meta(name='twitter:image', content=image)

      //- Open Graph data
      meta(property='og:title', content=title)
      meta(property='og:image', content=image)
      meta(property='og:description', content=comment)
      
		.
		.
		.
```

3. In the compiled html output the variables in `layout.pug` will be substituted with the variables' values from `dat.yaml` file and html page code will look something like this:

```html
<head>
	.
	.
	.

    <title>Snowdrop</title>
    <meta
        content="Galanthus is a small genus of about 20 species of bulbous perennial herbaceous plants in the family Amaryllidaceae. The plants have two linear leaves and a single small white drooping bell shaped flower with six petal-like tepals in two circles. The smaller inner petals have green markings."
        name="description">
    <meta content="Snowdrop. Did you know: The Species name 'Galanthus' comes from the Greek" itemprop="name">
    <meta
        content="Galanthus is a small genus of about 20 species of bulbous perennial herbaceous plants in the family Amaryllidaceae. The plants have two linear leaves and a single small white drooping bell shaped flower with six petal-like tepals in two circles. The smaller inner petals have green markings."
        itemprop="description">
    <meta
        content="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAOd1CI4oPfTryZpo_rAyZXf9ltuPAvRv45XPGDghPSLii5We"
        itemprop="image">
    <meta content="Snowdrop. Did you know: The Species name 'Galanthus' comes from the Greek" name="twitter:title">
    <meta
        content="Galanthus is a small genus of about 20 species of bulbous perennial herbaceous plants in the family Amaryllidaceae. The plants have two linear leaves and a single small white drooping bell shaped flower with six petal-like tepals in two circles. The smaller inner petals have green markings."
        name="twitter:description">
    <meta
        content="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAOd1CI4oPfTryZpo_rAyZXf9ltuPAvRv45XPGDghPSLii5We"
        name="twitter:image">
    <meta content="Snowdrop. Did you know: The Species name 'Galanthus' comes from the Greek" property="og:title">
    <meta
        content="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAOd1CI4oPfTryZpo_rAyZXf9ltuPAvRv45XPGDghPSLii5We"
        property="og:image">
    <meta property="og:description">

	.
	.
	.
</head>
```