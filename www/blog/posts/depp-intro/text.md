!['Dominoes](dominoes.jpg)

Sometimes it's not a trivial task to manage your project's dependencies, especially if different pages depends on different js files. It's where dependency managers come in use.

[Depp](https://github.com/muicss/johnnydepp) is a lightweight library allowing you to lazy-load pieces of code/styles/images when and where you need them.

## Define package bundle
It's easy to define dependency logic peice in depp:

```javascript
depp.define({
    'jquery': [
        '//cdn.jsdelivr.net/npm/jquery@3.4.0/dist/jquery.slim.min.js'
    ]
})
```

One dependency can depend on others like this:
```javascript
depp.define({
  'services': [
        '#jquery',
        '/assets/js/services.js'
    ]
})
```

You can define multiple dependencies at the same define function:
```javascript
depp.define({
  'jquery': [
        '//cdn.jsdelivr.net/npm/jquery@3.4.0/dist/jquery.slim.min.js'
    ],
  'services': [
        '#jquery',
        '/assets/js/services.js'
    ]
})
```

## Load dependency
```javascript
depp.require(['services'], function() {
  /* services is ready to be used */
});
```

## How to include depp in project
index.html
```html
<html>
  <head>
    <script src='//cdn.jsdelivr.net/npm/johnnydepp@0.1.0/dist/depp.min.js'></script>
  </head>
  <body>
    <script src='loader.js'></script>
    <script>
      depp.require(['services'], function() {
        /* services is ready to be used */
      })
    </script>
  </body>
</html>
```

loader.js
```javascript
depp.define({
    'jquery': [
        '//cdn.jsdelivr.net/npm/jquery@3.4.0/dist/jquery.slim.min.js'
    ],
    'services': [
        '#jquery',
        '/assets/js/services.js'
    ]
})
```
