


// Initializing Firebase
 var config = {
  apiKey: "AIzaSyACvHlf71d3ln4wNZeleuZcKApkYtG8d1w",
  authDomain: "lorretta.firebaseapp.com",
  databaseURL: "https://lorretta.firebaseio.com",
  projectId: "lorretta",
  storageBucket: "",
  messagingSenderId: "930079986833"
};

firebase.initializeApp(config);

var database = firebase.database();


// var firstName= new Array();
// var lastName= new Array();
// var address= new Array();
// var city= new Array();
// var state= new Array();
// var zip= new Array();
// var artistBand= new Array();
// var recordLabel= new Array();
// var telephone= new Array();
// var email= new Array();
// var website= new Array();
// var bio= new Array();

function insert() {
  var firstName = document.getElementById('firstName-Input').value || ''
  var lastName = document.getElementById('lastName-Input').value; // titleInput was derive from the input id in the HTML line 14.
  var address = document.getElementById('address-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var city = document.getElementById('city-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var state = document.getElementById('state-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var zip = document.getElementById('zip-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var artistBand = document.getElementById('artistBand-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var recordLabel = document.getElementById('recordLabel-Input').value; // ticketsInput was derive from the input id in the HTML line 20.
  var telephone = document.getElementById('telephone-Input').value;
  var email = document.getElementById('email-Input').value; // nameInput was derive from the input id in the HTML line 17.
  var website = document.getElementById('website-Input').value; // nameInput was derive from the input id in the HTML line 17.
  var bio = document.getElementById('bio-Input').value; // nameInput was derive from the input id in the HTML line 17.
  var profilePic = document.getElementById('profile-pic').value; // nameInput was derive from the input id in the HTML line 17.

  database.ref().push({
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    artistBand,
    recordLabel,
    telephone,
    email,
    website,
    bio,
    profilePic
  })

console.log(firstName)

// Image upload
  var input = document.querySelector('input');
  var preview = document.querySelector('.preview');
  
  input.style.opacity = 0;


  input.addEventListener('change', updateImageDisplay);


  function updateImageDisplay() {
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    var curFiles = input.files;
    if(curFiles.length === 0) {
      var para = document.createElement('p');
      para.textContent = 'No files currently selected for upload';
      preview.appendChild(para);
    } else {
      var list = document.createElement('ol');
      preview.appendChild(list);
      for(var i = 0; i < curFiles.length; i++) {
        var listItem = document.createElement('li');
        var para = document.createElement('p');
        if(validFileType(curFiles[i])) {
          para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
          var image = document.createElement('img');
          image.src = window.URL.createObjectURL(curFiles[i]);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
  
        } else {
          para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
          listItem.appendChild(para);
        }
  
        list.appendChild(listItem);
      }
    }
  }

  var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
  ]
  
  function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
      if(file.type === fileTypes[i]) {
        return true;
      }
    }
  
    return false;
  }

  function returnFileSize(number) {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number > 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }
  // firstName[firstName.length]=firstNameValue; // pulling data from the variables above. 
  // lastName[lastName.length]=lastNameValue; // pulling data from the variables above. 
  // address[address.length]=addressValue; // pulling data from the variables above. 
  // city[city.length]=cityValue; // pulling data from the variables above. 
  // state[state.length]=stateValue; // pulling data from the variables above. 
  // zip[zip.length]=zipValue; // pulling data from the variables above. 
  // artistBand[artistBand.length]=artistBandValue; // pulling data from the variables above. 
  // recordLabel[recordLabel.length]=recordLabelValue; // pulling data from the variables above. names[names.length]=firstNameValue; // pulling data from the variables above. 
  // telephone[telephone.length]=telephoneValue; // pulling data from the variables above. 
  // email[email.length]=emailValue; // pulling data from the variables above. 
  // website[website.length]=websiteValue; // pulling data from the variables above. 
  // bio[bio.length]=bioValue; // pulling data from the variables above. 

}

// Registration to Firebase

var form = document.getElementById("artist-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log('HIT')
  insert();
})

function show() {
  var content="<b>All Elements of the Arrays :</b><br>";
  for(var i = 0; i <names.length; i++) {
    content +=names[i]+"<br>";
  }
  for(var i = 0; i < email.length; i++) {
    content +=email[i]+"<br>";
  }
  for(var i = 0; i < address.length; i++) {
    content +=address[i]+"<br>";
  }
  for(var i = 0; i < telephones.length; i++) {
    content +=telephones[i]+"<br>";
  }
  document.getElementById('display').innerHTML = content; // 'display' is derived from the HTML. 
}

database.ref().once("value", function(snapshot) {
  var state = "CA";
  var artists = snapshot.val();
  for (key in artists) {
    if (state === artists[key].state) {
      console.log(artists[key])
    }
  }


  // var keys = Object.keys(artists);
  // for (var i = 0; i < keys.length; i++) {
  //   var key = keys[i];
  //   if (city === artists[key].city) {
  //     console.log(artists[key])
  //   }
  // }
})