(function() {
  autoExpande()
})()

function autoExpande() {
  var icon = document.querySelectorAll(".fa.fa-search")[0]
  setTimeout(function() {
    if(typeof icon !== "undefined") {
      icon.click()
    } else {
      autoExpande()
    }
  }, 100)
}