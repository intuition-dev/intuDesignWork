// devOps
var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101167101);
var clicky_custom = {};
clicky_custom.cookies_disable = true;

depp.define({
   'sentry' :'//browser.sentry-cdn.com/5.3.0/bundle.min.js'
   , 'clicky' :'//static.getclicky.com/js'
});

depp.require(['DOM','polly-wcomp'], function() {

   setTimeout(function(){

      depp.require([], function() {

         // site24();

      })//inner

   },100)//to

});

depp.require(['clicky'], function () {
   console.log('clicky activated');
});

depp.require(['sentry'], function () {
   Sentry.init({ dsn: 'https://b0a114396f5b43058bf68643dc0337ab@sentry.io/1442880' });
   console.log('sentry activated');
});

// TODO: site24x7 RUM
function site24() {
   console.log('site 24: RUM activated');
};

// site24x7 RUM
var rumMOKey = '470bb32b7d04b8906bd1896bb194b0fb';

(function () {
   if (window.performance && window.performance.timing && window.performance.navigation) {
      var site24x7_rum_beacon = document.createElement('script');
      site24x7_rum_beacon.async = true;
      site24x7_rum_beacon.setAttribute('src', '//static.site24x7rum.eu/beacon/site24x7rum-min.js?appKey=' + rumMOKey);
      document.getElementsByTagName('head')[0].appendChild(site24x7_rum_beacon);
      console.info('site24');
   }
})(window)
