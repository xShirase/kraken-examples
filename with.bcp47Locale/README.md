# with.bcp47Locale

An example Kraken 1.0 app that uses configurable locale resolution rules to determine the locale of each request/response and handles bcp47 language and bcp47 locale tags.

The supported locales in the sample are the country and languages:

* `country=ES` and `lang=en-US` or `lang=es-ES`
* `country=ER` and `lang=fr-FR`
* `country=US` and `lang=en-US`


To see it working with different locales, start the app:

```
$ npm install
$ npm start
```

In your browser, view [`http://localhost:8000/template4MyLocale?country=ES&lang=es-ES`](http://localhost:8000/template4MyLocale?country=ES&lang=es-ES) for Spanish Spanish in Spain, [`http://localhost:8000/template4MyLocale?country=ES&lang=en-US`](http://localhost:8000/template4MyLocale?country=ES&lang=en-US) for US English in Spain, [`http://localhost:8000/template4MyLocale?country=US&lang=en-US`](http://localhost:8000/template4MyLocale?country=US&lang=en-US) for US English in the US, or [`http://localhost:8000/template4MyLocale?country=ER&lang=fr-FR`](http://localhost:8000/template4MyLocale?country=ER&lang=fr-FR) for Parisian French in Eritrea.

This will automatically set the locale and redirect to the index page in the right locale
```

### What does the sample app demonstrate ?

* [Setting up middleware to populate locale for each request](config/config.json#L62)

* [Setting the locale in a response](lib/krakenlocale.js#L13)

* [Adding locale specific property files](locales)

