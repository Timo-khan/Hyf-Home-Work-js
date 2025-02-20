 function getFullname(firstname, surname) {
    return firstname + ' ' + surname;
  }
  
  let fullname1 = getFullname("Benjamin", "Hughes");
  let fullname2 = getFullname("Alice", "Smith");
  
  console.log(fullname1);
  console.log(fullname2);





  

  function getFullname(firstname, surname, useFormalName = false) {
    if (firstname === "" || surname === "") {
      return "Invalid input";
    }
  
    if (useFormalName) {
      return "Lord" + firstname + ' ' + surname;
    } else {
      return firstname + ' ' + surname;
    }
  }
  

  let fullname1 = getFullname("Benjamin", "Hughes", true);
  let fullname2 = getFullname("Alice", "Smith", false);
  
  console.log(fullname1); 
  console.log(fullname2); 