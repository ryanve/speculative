!function(api) {
  if (typeof window == 'undefined') {
    return require('open')('test.html')
  }

  api({rel: 'prerender', href: 'https://google.com'})
  api({rel: 'prefetch', href: 'https://github.com', pr: 0.1})
  api({rel: 'preconnect', href: 'https://www.npmjs.com', as: 'html'})

  console.log(document.querySelectorAll('link'))
}(this.speculative);
