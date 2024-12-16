import fieldDependencies from './fieldDependencies.js';

// Function to populate options for a specific field (adPlatform, campaignType, etc.)
function populateOptions(selectElement, options) {
	// Clear previous options
	selectElement.innerHTML = '<option value="">Select an option</option>';

	// We now process the truncated `options` object passed to this function
	Object.keys(options).forEach(key => {
		// For each key, we need to check if it has a label and value
		if (options[key].label && options[key].value) {
			const option = document.createElement("option");
			option.value = options[key].value;
			option.textContent = options[key].label;
			selectElement.appendChild(option);
		}
	});

	// Enable the select element after populating options
	selectElement.disabled = false;
}


// Helper function to get the next level in the hierarchy
function getNextLevel(currentLevel) {
    const levels = ['adPlatform', 'campaignType', 'adType', 'placements'];
    const currentIndex = levels.indexOf(currentLevel);
    console.log("Level current is " +currentLevel+ " and next is " + levels[currentIndex + 1])
    return currentIndex !== -1 && currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
}

// Dynamic field population based on selected value
function findObjectBelow(obj, key1) {
    var nextElement = document.getElementById(key1);
    console.log(nextElement);
    console.log('Working on slice: '+ JSON.stringify(obj, null, 2));

    // Base case: if the object is not an object or is null, return null
    if (obj === null || typeof obj !== 'object') return null;

    // Check if key1 exists in the current level of the object
    if (key1 in obj) {
        var options = obj[key1];
        console.log(options);
        populateOptions(nextElement, options)
        return
    }

    // Recurse into nested objects by truncating the object each iteration
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const result = findObjectBelow(obj[key], key1);
            if (result !== null) return result;
        }
    }

    // If no matching object is found
    return null;
}

function objectSlicer(formSelector) {
    const form = document.querySelector(formSelector); // Select the form using the given selector
    if (!form) {
        console.error("Form not found!");
        return [];
    }

    const fields = Array.from(form.elements); // Get all form elements in document order
    const result = [];

    fields.forEach(field => {
        // Check if the field is enabled and has an ID
        if (!field.disabled && field.id && field.value) {
            result.push(field.id, field.value); // Add field ID and value to the list
        }
    });

    return result;
}

function getNestedObjectValue(list, obj) {
    return list.reduce((acc, key) => {
        if (acc && acc.hasOwnProperty(key)) {
            return acc[key];
        } else {
            console.error(`Key "${key}" not found in object.`);
            return undefined;
        }
    }, obj);
}

function resetFieldsBelow(formSelector, eventTarget) {
    const currentElement = eventTarget; // Get the element where the function is triggered
    if (!currentElement) {
        console.error("Current element not found!");
        return [];
    }

    // Find the form that contains the current element
    const form = document.querySelector(formSelector);
    if (!form) {
        console.error("Form not found!");
        return [];
    }

    const fields = Array.from(form.elements); // Get all form elements in document order
    const index = fields.indexOf(currentElement); // Find the index of the current element
    if (index === -1) {
        console.error("Current element not found in form!");
        return [];
    }

    const result = [];

    // Loop through all fields below the current element
    for (let i = index + 1; i < fields.length; i++) {
        const field = fields[i];
        if (field.type != 'submit') {
            field.value = ""; // Clear the field value
            field.innerHTML = "";
            field.disabled = true; // Disable the field
            result.push(field); // Add the field to the result array
        }
    }

    return result; // Return the list of modified fields
}

function createUTM() {
    
    var campaignName = document.getElementById('campaignName').value;
    var finalURL = document.getElementById('finalURL').value;
    var adPlatform = document.getElementById('adPlatform').value;
    var campaignType = document.getElementById('campaignType').value;
    var adType = document.getElementById('adType').value;
    var placements = document.getElementById('placements').value;
    var biddingStrat = document.getElementById('biddingStrat').value;
    var audienceType = document.getElementById('audienceType').value;
    var messaging = document.getElementById('messaging').value;
    var solution = document.getElementById('solution').value;
    var isPaid = "paid";
    var utmCampaignParameterList = [campaignName, campaignType, adType, 
        placements, biddingStrat, audienceType, messaging, solution
    ]

    var utmCampaign = utmCampaignParameterList.join("-")

    return `${finalURL}?utm_campaign=${utmCampaign}&utm_source=${adPlatform}&utm_medium=${isPaid}`;

}

// Event listeners for the fields
document.getElementById("adPlatform").addEventListener("change", function (e) {
    resetFieldsBelow('#UTMForm', e.currentTarget);
    const fieldData = objectSlicer('#UTMForm'); // Replace '#myForm' with your form's selector
    const slicedDependencies = getNestedObjectValue(fieldData, fieldDependencies);
    findObjectBelow(slicedDependencies, getNextLevel("adPlatform"));
});

document.getElementById("campaignType").addEventListener("change", function (e) {
    resetFieldsBelow('#UTMForm', e.currentTarget);
    const fieldData = objectSlicer('#UTMForm'); // Replace '#myForm' with your form's selector
    const slicedDependencies = getNestedObjectValue(fieldData, fieldDependencies);
    findObjectBelow(slicedDependencies, getNextLevel("campaignType"));
});

document.getElementById("adType").addEventListener("change", function (e) {
    resetFieldsBelow('#UTMForm', e.currentTarget);
    const fieldData = objectSlicer('#UTMForm'); // Replace '#myForm' with your form's selector
    const slicedDependencies = getNestedObjectValue(fieldData, fieldDependencies);
    findObjectBelow(slicedDependencies, getNextLevel("adType"));
});

document.getElementById("finalParameters").addEventListener('submit', function(e) {
    e.preventDefault();
    const outputField = document.getElementById("output");
    const outputResult = createUTM(0);
    outputField.value = outputResult;
})


//variable to store all fields that need to be filled out
const fields = document.querySelectorAll('#basicInfo input, #UTMForm select, #finalParameters select');
const createUTMButton = document.getElementById('createUTM');

// Function to check if all fields are filled out
function validateFields() {
    const allFilled = Array.from(fields).every(field => field.value.trim() !== '');
    console.log(allFilled ? 'Valid' : 'Invalid');
    if (allFilled) {
        createUTMButton.removeAttribute('disabled');
    } else {
        createUTMButton.setAttribute('disabled', 'disabled');
    }
}

// Attach event listeners to each field
fields.forEach(field => {
    field.addEventListener('input', validateFields);
    field.addEventListener('change', validateFields);
});