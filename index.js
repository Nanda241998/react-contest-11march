function OpeningCeremony(score, callbackFnc) {
  console.log("Let the games begin!");
  setTimeout(function() {
    Race100M(score, callbackFnc);
  }, 1000);
}

function Race100M(score, callbackFnc) {
  console.log("Starting Race100M...");
  setTimeout(function() {
    var times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10
    };

    var sorted = Object.keys(times).sort(function(a, b) {
      return times[a] - times[b];
    });

    score[sorted[0]] += 50;
    score[sorted[1]] += 25;

    console.log("Race100M finished!");
    console.log("Previous Score:", score);

    callbackFnc(score, LongJump);
  }, 3000);
}

function LongJump(score, callbackFnc) {
  console.log("Starting LongJump...");
  setTimeout(function() {
    var color = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
    score[color] += 150;

    console.log("LongJump finished!");
    console.log("Previous Score:", score);

    callbackFnc(score, function() {
      var highestJump = prompt("Which colour secured the highest jump?");
      if (highestJump !== null && highestJump !== "") {
        if (score[highestJump] !== undefined) {
          score[highestJump] += 100;
        } else {
          console.log("Wrong Colour Entered");
        }
      } else {
        console.log("Event was cancelled");
      }
      AwardCeremony(score);
    });
  }, 2000);
}

function AwardCeremony(score) {
  console.log("Award Ceremony:");
  console.log("Yellow came first with", score.yellow, "points");
  console.log("Red came second with", score.red, "points");
  console.log("Green came third with", score.green, "points");
  console.log("Blue came last with", score.blue, "points");
}

var score = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0
};

OpeningCeremony(score, function(score, nextFnc) {
  nextFnc(score, function(score, nextFnc) {
    nextFnc(score, function(score, nextFnc) {
      nextFnc(score, function(score, nextFnc) {
        nextFnc(score);
      });
    });
  });
});
