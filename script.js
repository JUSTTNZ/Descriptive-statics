
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
        if (this.data.length === 0) {
            return undefined; // or handle the empty dataset case
        }
        // count occurence of each value
        const countMap = new Map(); 
        const(value of this.data) {
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

    
    meanDeviation() {
        const meanValue = this.mean();
        const deviations = this.data.map((value) => Math.abs(value - meanValue));
        return deviations.reduce((total, deviation) => total + deviation, 0) / this.data.length;
    }
    
        quartileDeviation() {
            const sortedData = this.data.slice().sort((a, b) => a - b);
    
            const q1Index = Math.ceil(0.25 * sortedData.length) - 1;
            const q3Index = Math.ceil(0.75 * sortedData.length) - 1;
    
            const q1 = sortedData[q1Index];
            const q3 = sortedData[q3Index];
    
            return (q3 - q1) / 2;
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
console.log('meanDeviation:', stats.meanDeviation());
console.log('quartileDeviation:', stats.quartileDeviation());



