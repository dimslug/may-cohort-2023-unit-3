let series = [0, 1];

while (series.length < 10) {
    popOne = series.pop();
    popTwo = series.pop();

    sum = popOne + popTwo;

    series.push(popTwo, popOne, sum);
    console.log(`${series}`);
}

//* Going Further

function fibonacciStack(startNumOne, startNumTwo, stackLength) {
    let series = [startNumOne, startNumTwo];

    while (series.length < stackLength){
        popOne = series.pop();
        popTwo = series.pop();
        sum = popOne + popTwo;

        series.push(popTwo, popOne, sum);
        series.length == 10 ? console.log(`${series}`): "" ;
    }
}

fibonacciStack(0, 1, 10);
