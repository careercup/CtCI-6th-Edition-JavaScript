var Player = function() {
  this.songQueue = [];
  this.currentSong = null;
};

Player.prototype.shuffle = function() {
  this.songQueue.sort(() => { return Math.random() > 0.5 ? 1 : 0; });
};

Player.prototype.play = function() {
  if (this.currentSong === null) {
    this.currentSong = this.songQueue.unshift();
    this.currentSong.play();
  } else {
    console.log('song currently playing');
  }
};

Player.prototype.pause = function() {
  if (this.currentSong !== null) {
    this.currentSong.pause();
  } else {
    console.log('no song in queue');
  }
};

Player.prototype.nextSong = function() {
  this.currentSong = this.songQueue.unshift();
  this.currentSong.play();
};

Player.prototype.addSong = function(song) {
  this.songQueue.push(song);
};

Player.prototype.currentSongName = function() {
  return this.currentSong.name;
};

// -songs
//  -trackUrl
//  -name
//  -play
//  -pause

var Song = function(name, trackFile) {
  this.name = name;
  this.track = new Audio(trackFile);
};

Song.prototype.play = function() {
  this.track.play();
};

Song.prototype.pause = function() {
  this.track.play();
};

/* TEST */
