function minimumMoves(injectedFish, fishes) {
    fishes.sort((a, b) => a - b); // sort the fish sizes in ascending order
    let moves = 0;
    let i = 0;
    while (i < fishes.length && fishes[i] < injectedFish) {
      // keep eating fish until the injected fish is bigger than all remaining fish
      injectedFish += fishes[i];
      i++;
    }
    while (i < fishes.length) {
      // remove all remaining fish
      moves++;
      i++;
    }
    while (injectedFish <= fishes[fishes.length - 2] + fishes[fishes.length - 1]) {
      // add fish until the injected fish is bigger than the sum of the two largest fish
      const newFish = fishes.pop();
      injectedFish += newFish;
      moves++;
    }
    return moves;
  }
  
  // example usage
  console.log(minimumMoves(10, [9, 20, 25, 100])); // output: 2
  