class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  // Creazione di oggetti User
  const user1 = new User("Mario", "Rossi", 30, "Roma");
  const user2 = new User("Luca", "Bianchi", 25, "Milano");
  
  // Verifica del confronto tra età
  const comparisonResult = user1.compareAge(user2);
  console.log(comparisonResult);



 // PET FORM
  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    displayPet(newPet);
  }

  function displayPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(listItem);
    checkSameOwner(pet);
  }

  function checkSameOwner(newPet) {
    const petList = document.getElementById('petList');
    const pets = petList.getElementsByTagName('li');

    for (let i = 0; i < pets.length - 1; i++) {
      const existingPet = parsePetData(pets[i].textContent);
      if (newPet.hasSameOwner(existingPet)) {
        console.log(`${newPet.petName} and ${existingPet.petName} share the same owner: ${newPet.hasSameOwner(existingPet)}`);
      }
    }
  }

  function parsePetData(petDataString) {
    const regex = /Pet Name: (.+), Owner Name: (.+), Species: (.+), Breed: (.+)/;
    const matches = petDataString.match(regex);
    return new Pet(matches[1], matches[2], matches[3], matches[4]);
  }
  