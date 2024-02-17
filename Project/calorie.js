function calculateCaloriesBurned() {
    var activity = document.getElementById('activity').value;
    var duration = parseInt(document.getElementById('duration').value);
    var intensity = parseInt(document.getElementById('intensity').value);
    
    var caloriesBurned = calculateBaseCalories(activity) * (intensity / 10) * duration;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'You burned approximately ' + Math.round(caloriesBurned) + ' calories.';
}

function calculateBaseCalories(activity) {
    switch (activity) {
        case 'running':
            return 10;
        case 'cycling':
            return 8;
        case 'swimming':
            return 12;
        case 'jumping_rope':
            return 15;
        case 'weight_lifting':
            return 5;
        case 'yoga':
            return 3;
        case 'aerobics':
            return 7;
        case 'dancing':
            return 6;
        case 'hiking':
            return 9;
        case 'rowing':
            return 11;
        case 'basketball':
            return 13;
        case 'soccer':
            return 14;
        case 'tennis':
            return 10;
        case 'skiing':
            return 12;
        case 'snowboarding':
            return 11;
        case 'surfing':
            return 8;
        case 'martial_arts':
            return 14;
        case 'rock_climbing':
            return 13;
        case 'gardening':
            return 5;
        case 'cleaning':
            return 4;
        case 'cooking':
            return 3;
        case 'playing_instrument':
            return 2;
        case 'desk_work':
            return 2;
        case 'sleeping':
            return 1;
        default:
            return 5;
    }
}

document.getElementById('intensity').addEventListener('input', function() {
    document.getElementById('intensityValue').innerText = this.value;
});



