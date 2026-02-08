$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_music = $("#play-music");
  var bgm = document.getElementById("bgm");

  function tryPlayMusic() {
    if (!bgm) return;
    var playPromise = bgm.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }

  function unmuteAndPlay() {
    if (!bgm) return;
    bgm.muted = false;
    tryPlayMusic();
  }

  envelope.click(function () {
    open();
    unmuteAndPlay();
  });
  btn_open.click(function () {
    open();
    unmuteAndPlay();
  });
  btn_reset.click(function () {
    close();
  });

  btn_music.click(function () {
    unmuteAndPlay();
    btn_music.prop("disabled", true).text("Playing");
  });

  // Attempt autoplay; most browsers require a user gesture, so keep a fallback
  tryPlayMusic();
  // No global unmute; user must tap the button

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
