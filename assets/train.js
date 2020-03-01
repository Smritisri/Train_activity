

// 1. Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDl5sUQrdbzS3pRBCTeWVtPPNjv7O2zudY",
    authDomain: "train-a0644.firebaseapp.com",
    databaseURL: "https://train-a0644.firebaseio.com",
    projectId: "train-a0644",
    storageBucket: "",
    messagingSenderId: "262566323259",
    appId: "1:262566323259:web:0f9d8abaaa573b67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    var trainTime = $("#trainTime-input").val().trim();
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination:trainDestination ,
      frequency: trainFrequency,
      time: trainTime,
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.time);
   
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#trainTime").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;
    var trainTime = childSnapshot.val().time;
  
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(trainTime);
  
    var nextArrival ;
    var minutesAway ;



   
  
    // To Create the new row
    var newRow = $("<tr>").append(
    $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(trainTime),
      $("<td>").text(nextArrival),
      $("<td>").text(minutesAway),
      
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  