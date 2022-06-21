window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 17,
    transitionDuration: "1s",
    isFitWidth: true,
  });
};

// const videos = document.querySelectorAll('iframe')
// const close = document.querySelector('.btn-close')

// close.addEventListener('click', () => {
//    videos.forEach(i => {
//     // console.log("i.src   "+i.src)
//       const source = i.src
//       i.src = ''
//       i.src = source
//     // console.log("source   "+source)

//    })
// })

// // global variable for the player
// var player;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
//   // create the global player from the specific iframe (#video)
//   player = new YT.Player("video", {
//     events: {
//       // call this function when player is ready to use
//       onReady: onPlayerReady,
//     },
//   });
// }

// function onPlayerReady(event) {
//   // bind events
// //   var playButton = document.getElementById("play-button");
// //   playButton.addEventListener("click", function () {
// //     player.playVideo();
// //   });

// //   var pauseButton = document.getElementById("pause-button");
// //   pauseButton.addEventListener("click", function () {
// //     player.pauseVideo();
// //   });

//   var stopButton = document.getElementById("test");
//   stopButton.addEventListener("click", function () {
//     player.stopVideo();
//   });
// }

// // Inject YouTube API script
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
