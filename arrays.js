document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // --- opgave 1 ---

    let newNumbers = numbersArray.filter((elements) => elements > 20);

    console.log(newNumbers);
    
    
    // --- opgave 2 ---

    const newCat = catsArray.push('Sniffles');
    console.log(catsArray);
    
    

}) // ends DOMContentLoaded