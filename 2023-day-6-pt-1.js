let inputppp = `Time:        62     73     75     65
Distance:   644   1023   1240   1023`;

let inputtt = `Time:      7  15   30
Distance:  9  40  200`;

const part1 = () => {
  output = 1;

  let racesTest = [
    [7, 9],
    [15, 40],
    [30, 200],
  ];
  
  let races = [ [ 62, 644 ], [ 73, 1023 ], [ 75, 1240 ], [ 65, 1023 ] ]

  races.forEach((race) => {
    let time = race[0];
    let distance = race[1];
    let waysToWinPerRace = 0;

    for (let i = 0; i <= time; i++) {
      let speed = i;
      let totalDistance = speed * (time - speed);

      if (totalDistance > distance) waysToWinPerRace++;
    }
    output = output * waysToWinPerRace;

  });

  console.log("output:", output);
};

part1();
