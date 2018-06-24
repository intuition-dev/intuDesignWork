# smaller semantic-iu

Start with
http://github.com/doabit/semantic-ui-sass/tree/master/app/assets/stylesheets

and work with prepros.io as normal.

edit font, disable, etc.

Load smalles css, semnatic 1, like layout.
Ideally semnatic 1 loads after pg images
and then after all, load semantic 2


Where you need more or js:
http://jsdelivr.com/package/npm/semantic-ui?path=dist%2Fcomponents

ex:

loadjs([ '//cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/components/sidebar.min.js'


loadjs.ready(['style'], function () { //load large css
	loadjs([ '/assets/css/semnatic2.css'
	], 'css2', {
		async: false //required due to loadjs bug with bundles
	})
})


Separate, icons used by setup js:
- https://webkul.github.io/vivid/docs.html

Or you can load
http://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/components/icon.css

(Same w/ flags)

In general, a good way to handle SemnaticUI.