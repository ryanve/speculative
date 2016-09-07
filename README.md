# speculative

```sh
npm install speculative --save
```

```js
var speculative = require('speculative')

speculative({
  href: 'http://google.com',
  rel: 'prerender'
})
```

## API
### `speculative(attributes)`

#### `attributes`
- `href`: URI
- `rel`: relation
- `pr`: probability number between `0` and `1`
- `as`: [content type](https://www.w3.org/TR/preload/#link-element-interface-extensions)
- `crossorigin`: [CORS setting](https://html.spec.whatwg.org/multipage/infrastructure.html#cors-settings-attributes)
- `media`: media query

#### `rel`
<table>
  <tr>
    <th scope="col"><code>rel</code> value</th>
    <th scope="col">Nature</th>
    <th scope="col">Browser action</th>
  </tr>
  <tr>
    <td><a href="http://w3c.github.io/resource-hints/#prerender">prerender</a></td>
    <td>speculative</td>
    <td>DNS lookup, TCP/TLS handshake, fetch data, execute scripts</td>
  </tr>
  <tr>
    <td><a href="https://www.w3.org/TR/preload/#link-type-preload">preload</a></td>
    <td>mandatory</td>
    <td>DNS lookup, TCP/TLS handshake, fetch data</td>
  </tr>
  <tr>
    <td><a href="http://w3c.github.io/resource-hints/#prefetch">prefetch</a></td>
    <td>speculative</td>
    <td>DNS lookup, TCP/TLS handshake, fetch data</td>
  </tr>
  <tr>
    <td><a href="http://w3c.github.io/resource-hints/#preconnect">preconnect</a></td>
    <td>speculative</td>
    <td>DNS lookup, TCP/TLS handshake</td>
  </tr>
  <tr>
    <td><a href="http://w3c.github.io/resource-hints/#dns-prefetch">dns-prefetch</a></td>
    <td>speculative</td>
    <td>DNS lookup</td>
  </tr>
</table>

## Examples

### Speculating navigation
```js
speculative({
  href: '/page/2',
  rel: 'prerender next',
  as: 'html',
  pr: .5
})

speculative({
  href: '/page/3',
  rel: 'prefetch',
  as: 'html',
  pr: .2
})
```

### Prefetching playlist tracks
```js
speculative({
  href: './track-2.mp3',
  rel: 'prefetch',
  as: 'media',
  pr: .8
})

speculative({
  href: './track-3.mp3',
  rel: 'prefetch',
  as: 'media',
  pr: .3
})
```

### Prefetching an image
```js
speculative({
  href: './hi-res.jpg',
  rel: 'prefetch',
  media: '(min-width: 60rem)',
  as: 'image'
})
```

### Prefetching JavaScript
```js
speculative({
  href: 'https://code.jquery.com/jquery-3.1.0.slim.min.js',
  rel: 'prefetch',
  crossorigin: 'anonymous',
  as: 'script',
  pr: 1
})
```

### Prefetching CSS
```js
speculative({
  href: '/animations.css',
  rel: 'prefetch',
  media: 'screen',
  as: 'style'
})
```

### **Prefetch with care**. Test for metered data usage

```js
var cxn = require('cxn')
var speculative = cxn.metered ? function() {} : require('speculative')
```

## License
MIT
