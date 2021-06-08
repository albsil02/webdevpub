/*function pointSystem() {
    let places = {
        Verstappen: {
            förare: "Max Verstappen",
            bil:"Redbull",
            poäng: 105,
            id:"Redbull",
            placering:1
        },
        Hamiltion: {
            bil: "Mercedes",
            förare:"Lewis Hamilton",
            poäng: 101,
            id:"Mercedes",
            placering:2
        },
        Norris: {
            bil: "McLaren",
            förare:"Lando Norris",
            poäng: 80,
            id:"McLaren",
            placering:3
        },
        Leclerc: {
            bil: "Ferarri",
            förare:"Charles Leclerc",
            poäng: 78,
            id:"Ferarri",
            placering:4
        },
        Ocon: {
            bil: "Alpine",
            förare:"Estaban Ocon",
            poäng: 16,
            id:"Alpine",
            placering:5
        },
        Vettel: {
            bil: "Aston Martin",
           förare: "Sebastian Vettel",
            poäng: 10,
            id:"AstonMartin",
            placering:6
        },
        Gasly: {
            bil: "AlphaTouri",
            förare:"Piere Gasly",
            poäng: 6,
            id:"AlphaTuori",
            placering:7
        },
        Giovinazzi: {
            bil: "Alfa Romeo",
            förare: "Antonio Giovinazzi",
            poäng: 2,
            id:"AlfaRomeo",
            placering:8
        },
        Russel: {
            bil: "Williams",
            förare: "George Russel",
            poäng: 0,
            id:"Williams",
            placering:9
        },
        Schumacher: {
            bil: "Haas",
            förare:"Mick Schumacher",
            poäng: 0,
            id: "Haas",
            placering:10
           
        },
        Perez: {
            förare: "Sergio Perez",
            bil:"Redbull",
            poäng: 105,
            id:"Redbull",
            placering:11
        },
        Bottas: {
            bil: "Mercedes",
            förare:"Valteri Bottas",
            poäng: 101,
            id:"Mercedes",
            placering:12
        },
        Riciardo: {
            bil: "McLaren",
            förare:"Daniel Riciardo",
            poäng: 80,
            id:"McLaren",
            placering:13
        },
        Sainz: {
            bil: "Ferarri",
            förare:"Carlos Sainz",
            poäng: 78,
            id:"Ferarri",
            placering:14
        },
        Alonso: {
            bil: "Alpine",
            förare:"Fernando Alonso",
            poäng: 16,
            id:"Alpine",
            placering:5
        },
        Stroll: {
            bil: "Aston Martin",
            förare:"Lance Stroll",
            poäng: 10,
            id:"AstonMartin",
            placering:6
        },
        Tsunoda: {
            bil: "AlphaTouri",
            förare:"Yuki Tsunoda",
            poäng: 6,
            id:"AlphaTuori",
            placering:7
        },
        Raikanen: {
            bil: "Alfa Romeo",
            förare:"Kimi Raikanen",
            poäng: 2,
            id:"AlfaRomeo",
            placering:8
        },
        Latifi: {
            bil: "Williams",
            förare:"Nicolas Latifi",
            poäng: 0,
            id:"Williams",
            placering:9
        },
        Mazepin: {
            bil: "Haas",
           förare:"Nikita Mazepin",
            poäng: 0,
            id: "Haas",
            placering:10
           
        }

    }


    let container = document.getElementById("driverContainer")

   
    for (let drivers in places) {
        console.log("hej")
        let parent = document.createElement("div");
        let car = document.createElement("span");
        let points = document.createElement("span")
        let driver = document.createElement("span")
        parent.className= "driverButton"
        let info = places[drivers];
        let place = document.createElement("span")
        
        parent.id=info.id
        place.innerHTML=info.placering
        car.innerHTML=info.bil,
        points.innerHTML = info.poäng;
        driver.innerHTML = info.förare;
        
        parent.appendChild(place)
        parent.appendChild(driver)
        parent.appendChild(car)
        parent.appendChild(points)
        
        

        container.appendChild(parent)


    }

}
pointSystem();
*/