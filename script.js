window.addEventListener('load', function() {
  var hammertime = new Hammer(document.body);
  var sections = document.querySelectorAll('.section');
  var currentIndex = 0;
  var seeMyWorkBtn = document.getElementById('seeMyWorkBtn');
  var isScrolling = false;
  var sectionTitles = [" ", "Take Me Home (Music Video)", "Cougars Playoffs EP3", "Papa Roach - Ace of Spades"];

  const videos = document.querySelectorAll('video');

  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  
  leftArrow.addEventListener('click', function() {
      if (isScrolling || currentIndex <= 0) return;
      currentIndex--;
      isScrolling = true;
      scrollToElement(sections[currentIndex]);
      setTimeout(() => { isScrolling = false; }, 800);
  });
  
  rightArrow.addEventListener('click', function() {
      if (isScrolling || currentIndex >= sections.length - 1) return;
      currentIndex++;
      isScrolling = true;
      scrollToElement(sections[currentIndex]);
      setTimeout(() => { isScrolling = false; }, 800);
  });

  function scrollToElement(element) {
    if (currentIndex === 0) {
      location.reload();
      return;
    }
    window.scroll({
      top: element.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    checkPosition();
  }

  hammertime.on('panup pandown', function(ev) {
    if (isScrolling) return;

    if (ev.type == 'panup' && currentIndex < sections.length - 1) {
      currentIndex++;
    } else if (ev.type == 'pandown' && currentIndex > 0) {
      currentIndex--;
    }

    isScrolling = true;
    scrollToElement(sections[currentIndex]);
    setTimeout(() => { isScrolling = false; 800; checkPosition(); }, 800);
  });

  seeMyWorkBtn.addEventListener('click', function() {
    if (isScrolling) return;

    if (currentIndex < sections.length - 1) {
      currentIndex++;
      isScrolling = true;
      scrollToElement(sections[currentIndex]);
      setTimeout(() => { isScrolling = false; }, 800);
    }
  });

  function checkPosition() {
    var videoElements = document.querySelectorAll('video');
    var hideElements = document.querySelectorAll('.toHide');

    videoElements.forEach(function(videoElement) {
      var videoPosition = videoElement.getBoundingClientRect();

      if (videoPosition.top <= 0 && videoPosition.bottom >= 0) {
        // Video is in viewport, so play it and unmute it
        var video1 = document.getElementById('video1').querySelector('video');
        var video2 = document.getElementById('video2').querySelector('video');
        if (!video1.muted && !video2.muted) {
          video1.muted = true;
        }
        videoElement.play();
        videoElement.muted = false;
  
        // Change the h2 element for the current section
        var currentSectionTitle = sectionTitles[currentIndex];
        var h2Element = document.querySelector("#anchr2 h2");
        if (h2Element) {
          h2Element.textContent = currentSectionTitle;
        }
      } else {
        // Video is not in the viewport, so pause it and mute it
        videoElement.pause();
        videoElement.muted = true;
      }
    });

    var elementPosition = document.getElementById('anchr2').getBoundingClientRect();
    if (elementPosition.top <= 0) {
      hideElements.forEach(el => el.classList.remove('hidden'));
    } else {
      hideElements.forEach(el => el.classList.add('hidden'));
    }
  }

  // Pause all videos when the page loads
  window.addEventListener('DOMContentLoaded', function() {
    var videoElements = document.querySelectorAll('video');
    videoElements.forEach(function(videoElement) {
      videoElement.pause();
      videoElement.muted = true;
    });
  });

  checkPosition();
  window.addEventListener('scroll', checkPosition);
});

//SHARE BUTTON -- Copy video link to Clipboard
function copyText() {
  var h2Element = document.querySelector("#anchr2 h2");
  var h2Text = h2Element.textContent;
  console.log("attempting to copy " + h2Text)
  if (h2Text == "Take Me Home (Music Video)") {
  navigator.clipboard.writeText
      ("https://carter-crick.github.io/cartercrick.com/TakeMeHome.html");
  alert("Link to 'Take Me Home (Music Video)' has been copied to the clipboard!");
  }
  else if (h2Text == "Cougars Playoffs EP3") {
    navigator.clipboard.writeText
        ("https://carter-crick.github.io/cartercrick.com/CougarsPlayoffsEP3.html");
    alert("Link to 'Cougars Playoffs EP3' has been copied to the clipboard!");
    }
  else if (h2Text == "Papa Roach - Ace of Spades"){
    navigator.clipboard.writeText
    ("https://carter-crick.github.io/cartercrick.com/AceOfSpades.html");
    alert("Link to 'Papa Roach - Ace of Spades' has been copied to the clipboard!");
  }
  else {
    console.log("share failed")
  }
}

//WATCH BUTTON -- Go to current video on youtube
function watch() {
  var h2Element = document.querySelector("#anchr2 h2");
  var h2Text = h2Element.textContent;
  console.log("attempting to copy " + h2Text)
  if (h2Text == "Take Me Home (Music Video)") {
    window.open("TakeMeHome.html", "_blank");
  }
  else if (h2Text == "Cougars Playoffs EP3") {
    window.open("CougarsPlayoffsEP3.html", "_blank");
    }
  else if (h2Text == "Papa Roach - Ace of Spades"){
    window.open("AceOfSpades.html", "_blank");
  }
  else {
    console.log("watch failed")
  }
}

//DEVELOPMENT BUTTON - Go to calculator
function goToCalc() {
  window.open("Calc.html", "_blank");
}