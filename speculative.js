!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'speculative', function() {
  
  function inject(tap) {
    var link = document.createElement('link')
    tap(link)
    document.head.appendChild(link)
  }

  function speculative(atts) {
    inject(function(link) {
      for (var k in atts) {
        if (atts.hasOwnProperty(k)) {
          link.setAttribute(k, atts[k])
        }
      }
    })
  }

  return speculative
});