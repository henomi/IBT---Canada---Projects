`use strict`

const sumDistances=(...distance)=>{
    return distance.reduce((total, distance)=> total+distance,0)
}

const calculateBaseFare=(totalDistance, ratePerKm=15)=>{
    return totalDistance * ratePerKm
}

function formatCurrency(amount){
    return `${amount.toFixed(2)} ETB`;
}

const makeSurgeMultiplier = (surgeRate) =>{
    return (baseFare)=>{
        return baseFare * surgeRate
    }
}

function makeDriverTracker(){
    let tripsCompleted = 0
    return {
        recordTrip:function(){
            tripsCompleted++
        },
        getTrips:function(){
            return tripsCompleted
        }

    }

}
const trips=makeDriverTracker()

function generateReceipt(distances, surgeFn, tracker, callback) {

    tracker.recordTrip();

    const totalDistance = sumDistances(...distances);

    const baseFare = calculateBaseFare(totalDistance);

    const totalFare = surgeFn(baseFare);

    const formattedFare = formatCurrency(totalFare);

    const tripNumber = tracker.getTrips();

    const receipt = `Trip #${tripNumber}: Total Fare is ${formattedFare}.`;

    callback(receipt);
}

const tayesTracker = makeDriverTracker();

const standardPricing = makeSurgeMultiplier(1.0);

const rushHourPricing = makeSurgeMultiplier(1.5);

const printToConsole = (message) => console.log(message);


generateReceipt([2, 3], standardPricing, tayesTracker, printToConsole);

generateReceipt([10], rushHourPricing, tayesTracker, printToConsole);
