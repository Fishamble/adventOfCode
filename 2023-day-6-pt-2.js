let inputppp = `Time:        62     73     75     65
Distance:   644   1023   1240   1023`;

let inputtt = `Time:      7  15   30
Distance:  9  40  200`;

const part1 = () => {
  output = 1;

  // let time = 71530;
  // let distance = 940200;

  let time = 62737565;
  let distance = 644102312401023;

  let waysToWinPerRace = 0;

  for (let i = 0; i <= time; i++) {
    let speed = i;
    let totalDistance = speed * (time - speed);

    if (totalDistance > distance) waysToWinPerRace++;
  }

  console.log("output:", waysToWinPerRace);
};

part1();
