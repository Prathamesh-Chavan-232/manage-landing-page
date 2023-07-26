let path = document.querySelector('path')
let pathLen = path.getTotalLength()


path.style.strokeDasharray = pathLen + ' ' + pathLen
path.style.strokeDashoffset = pathLen

window.addEventListener("scroll", ( ) => {

  var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  var drawLen = pathLen * scrollPercent

  path.style.strokeDashoffset = pathLen - drawLen

  const target = document.querySelectorAll(".scroll")
  console.log(target)
  
  var index = 0, len = target.length
  for(index; index < len; index++)
  {
    var pos = window.scrollY * target[index].dataset.rate;

    if(target[index].dataset.direction === "vertical") {
      target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
    } else {
      var posX = window.scrollY * target[index].dataset.ratex
      var posY = window.scrollY * target[index].dataset.ratey
      target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'
    }
  }

  
  
  
  
})
