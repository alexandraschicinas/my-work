(async (one) => {
    const response = await fetch("http://swapi.dev/api/people/3/");

    console.log(response);
    if (response.ok === true) {
        const person3 = await response.json(one);
        console.log(person3);
        document
        .getElementById("one")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0]
        .innerText = person3.name;
        document
        .getElementById("one")
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0]
        .innerText = person3.height;

        document
        .getElementById("one")
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0]
        .innerText = person3.mass;

        document
        .getElementById("one")
        .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0]
        .innerText = person3.hair_color;

        document
        .getElementById("one")
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0]
        .innerText = person3.birth_year;

        document
        .getElementById("one")
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0]
        .innerText = person3.gender;


    }
})();

(async (one) => {
    const response = await fetch("http://swapi.dev/api/people/6/");

    console.log(response);
    if (response.ok === true) {
        const person3 = await response.json(one);
        console.log(person3);
        document
        .getElementById("two")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0]
        .innerText = person3.name;
        document
        .getElementById("two")
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0]
        .innerText = person3.height;

        document
        .getElementById("two")
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0]
        .innerText = person3.mass;

        document
        .getElementById("two")
        .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0]
        .innerText = person3.hair_color;

        document
        .getElementById("two")
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0]
        .innerText = person3.birth_year;

        document
        .getElementById("two")
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0]
        .innerText = person3.gender;


    }
})();
(async (one) => {
    const response = await fetch("http://swapi.dev/api/people/10/");

    console.log(response);
    if (response.ok === true) {
        const person3 = await response.json(one);
        console.log(person3);
        document
        .getElementById("three")
        .getElementsByTagName("p")[0]
        .getElementsByTagName("span")[0]
        .innerText = person3.name;
        document
        .getElementById("three")
        .getElementsByTagName("p")[1]
        .getElementsByTagName("span")[0]
        .innerText = person3.height;

        document
        .getElementById("three")
        .getElementsByTagName("p")[2]
        .getElementsByTagName("span")[0]
        .innerText = person3.mass;

        document
        .getElementById("three")
        .getElementsByTagName("p")[3]
        .getElementsByTagName("span")[0]
        .innerText = person3.hair_color;

        document
        .getElementById("three")
        .getElementsByTagName("p")[4]
        .getElementsByTagName("span")[0]
        .innerText = person3.birth_year;

        document
        .getElementById("three")
        .getElementsByTagName("p")[5]
        .getElementsByTagName("span")[0]
        .innerText = person3.gender;


    }
})();
