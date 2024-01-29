
class DescriptiveStatistics {
    constructor(data) {
        this.data = data;
    }

    // For measures of tendency

    mean() {
        const sum = this.data.reduce((total, value) => total + value, 0);
        return sum / this.data.length;
    }

    median() {
        const slicedData = this.data.slice().sort((a, b) => a - b);
        const middle = Math.floor(slicedData.length  / 2);

        if(slicedData.length % 2 === 0) {
            return (slicedData[middle - 1] + slicedData[middle]) / 2;
        } else {
            return slicedData[middle]
        }
    }

    mode() {
        const countMap = new Map(); 
        this.data.forEach((value) => {
            countMap.set(value, (countMap.get(value) || 0) + 1);
        });

        let mode;
        let maximumCount = 0;

        countMap.forEach((count, value) => {
            if (count > maximumCount) {
                mode = value;
                maximumCount =  count;
            }
        });

        return mode;

    }

    // For measuring deispersion

    range() {
        const slicedData = this.data.slice().sort((a, b) => a - b);
        return slicedData[slicedData.length - 1] - slicedData[0];
    }

    variance() {
        const meanValue = this.mean();
        const squaredDifferences = this.data.map((value) => Math.pow(value - meanValue, 2));
        return squaredDifferences.reduce((total, value) => total + value, 0) / this.data.length;
    }

    standarddDeviation() {
        return Math.sqrt(this.variance());
    }

    skewness(){
        const n = this.data.length;
        const meanValue = this.mean();
        const standardSkewness =  this.standarddDeviation();
        const skewCubedDifference = this.data.reduce((total, value) => total + Math.pow((value -  meanValue) / standardSkewness, 3), 0);
        return (n / ((n - 1) * (n - 2))) * skewCubedDifference;
    }

    kurtosis() {
        const n = this.data.length;
        const meanValue = this.mean();
        const standardSkewness = this.standarddDeviation();

        const sumFourthDiff =  this.data.reduce((total, value) => total + Math.pow((value - meanValue) / standardSkewness, 4), 0);
        return (1 / n) * sumFourthDiff - 3;
    }
}

const data =  [2, 4, 4, 4, 5, 5, 7, 9];
const stats = new DescriptiveStatistics(data);

// Answers

console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Range:', stats.range());
console.log('Variance:', stats.variance());
console.log('Standard Deviation:', stats.standarddDeviation());
console.log('Skewness:', stats.skewness());
console.log('Kurtosis:', stats.kurtosis());



