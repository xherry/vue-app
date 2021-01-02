; (function () {
  const width = document.body.clientWidth || window.innerWidth
  const scale = width / 750
  const content = 'width=750, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', viewport-fit=cover'
  document.querySelector('meta[name="viewport"]').content = content
})()