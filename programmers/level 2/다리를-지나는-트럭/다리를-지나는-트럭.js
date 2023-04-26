function solution(bridge_length, weight, truck_weights) {
  const onBridge = [];
  let count = 0;
  let totalWeight = 0;

  while (truck_weights.length > 0) {
    count++;
    if (onBridge.length === bridge_length) totalWeight -= onBridge.shift();
    if (totalWeight + truck_weights[0] > weight) {
      onBridge.push(0);
      continue;
    }

    let currTruck = truck_weights.shift();
    onBridge.push(currTruck);
    totalWeight += currTruck;
  }

  return (count += bridge_length);
}

console.log(solution(2, 10, [7, 4, 5, 6]));
