function infoMercedes() {
    let button = document.getElementById("Mercedes")
    button.style.backgroundColor = "silver";
    console.log("Albin")
}
function drive() {
    let button = document.getElementById("ledarBil")
    button.style.animation = 'none';
    button.offsetHeight; /* trigger reflow */
    button.style.animation = "leftright 3s ";

}

function infoMcLaren() {
    let button = document.getElementById("McLaren")
    button.style.backgroundColor = "orange";
}


function pointSystem() {
    let places = {
        Redbull: {
            bil: "Redbull",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/teamCar.transform/3col/image.png" ,
            poäng: 174,
            id:"Redbull",
            placering:1,
            
           
        },
        Mercedes: {
            bil: "Mercedes",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/teamCar.transform/3col/image.png",
            poäng: 148,
            id:"Mercedes",
            placering:2
        },
        McLaren: {
            bil: "McLaren",
            bild: "https://www.formula1.com/content/fom-website/en/teams/McLaren/jcr:content/teamCar.img.jpg",
            poäng: 94,
            id:"McLaren",
            placering:3
        },
        Ferarri: {
            bil: "Ferarri",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Ferrari/jcr:content/teamCar.img.jpg",
            poäng: 92,
            id:"Ferarri",
            placering:4
        },
        
        
        AlphaTouri: {
            bil: "AlphaTouri",
            bild: "https://www.formula1.com/content/fom-website/en/teams/AlphaTauri/jcr:content/teamCar.img.jpg",
            poäng: 39,
            id:"AlphaTuori",
            placering:5
        },
        AstonMartin: {
            bil: "Aston Martin",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Aston-Martin/jcr:content/teamCar.img.jpg",
            poäng: 37,
            id:"AstonMartin",
            placering:6
        },
        Alpine: {
            bil: "Alpine",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Alpine/jcr:content/teamCar.img.jpg",
            poäng: 25,
            id:"Alpine",
            placering:7
        },
        AlfaRomeo: {
            bil: "Alfa Romeo",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo-Racing/jcr:content/teamCar.img.jpg",
            poäng: 2,
            id:"AlfaRomeo",
            placering:8
        },
        Williams: {
            bil: "Williams",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Williams/jcr:content/teamCar.img.jpg",
            poäng: 0,
            id:"Williams",
            placering:9
        },
        Haas: {
            bil: "Haas",
            bild: "https://www.formula1.com/content/fom-website/en/teams/Haas-F1-Team/jcr:content/teamCar.img.jpg",
            poäng: 0,
            id: "Haas",
            placering:10
           
        }

    }


    let container = document.getElementById("constructorContainer")

    
    for (let constructor in places){
        
    
   

        

    
        let parent = document.createElement("div");
        let image = document.createElement("img")
        let points = document.createElement("span")
        let car = document.createElement("span")
        parent.className= "constructorButton"
        let info = places[constructor];
        let place = document.createElement("span")
       
        parent.id=info.id
        place.innerHTML=info.placering
        image.src = info.bild;
        points.innerHTML = info.poäng;
        car.innerHTML = info.bil;
        image.style.width="90%"
        parent.appendChild(place)
        parent.appendChild(car)
        parent.appendChild(image)
        parent.appendChild(points)
        container.appendChild(parent)
    }
    



    
    
}

pointSystem();

