class person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;

    }

    wakeUp(time){
        console.log(`I always wake up at ${time} am.`);
    }

    eat(food){
        console.log(`I like to eat ${food}.`);
    }

    work(){
        console.log(`I am working as a web developer.`);
    }

    sleep(){
        console.log(`I try to sleep eight hours every night.`);
    }
}
const me = new person("Alexandra", "feminin");
console.log(me.gender);
me.wakeUp(6);
me.eat("chocolate");
me.work();
me.sleep();

class student extends person {
    constructor(name, gender, year, university, courses){
        super(name, gender);
        this.year = year;
        this. university = university;
        this.courses = [];
    
    }
    learn(course){
        this.courses.push(course);
        return this.courses;
        
    }
}
const jake = new student("Jake", "masculin", 3, "UmfCluj");

console.log(jake.name, jake.year);
jake.learn("english");
console.log(jake.courses);

const sara = new student("Sara","feminin", 1, "UBB");
console.log(sara.university, sara.year, sara.courses);
sara.wakeUp("6:00");

sara.learn("informatics");
console.log(sara.courses);

const jane = new student("Jane", "feminin", 6, "USAMV");
console.log(jane.name, jane.gender);

jane.work();


class teacher extends person {
    constructor (name, gender, yearsOfExperience, university, courses) {
        super(name, gender);
        this.yearsOfExperience = yearsOfExperience;
        this.university = university;
        this.courses = [];
    }
    teach(course){
        this.courses.push(course);
        return this.courses;
    }

}

const math = new teacher("Mr. Doc", "masculin", 8, "UMF");
console.log(math.name, math.gender, math.yearsOfExperience, math.university);

math.teach("mathematics");
console.log(math.courses);

math.eat("roasted steake");

const chemistry = new teacher("Ms. Chemistry", "masculin", 2, "UBB","chemistry");
console.log(chemistry.name, chemistry.university, chemistry.gender);

chemistry.sleep();

chemistry.teach("chemistry");
console.log(chemistry.courses);


const earth = new teacher ("Mr. Earth", "masculin", 6, "UBB", "geography");
console.log(earth.name, earth.yearsOfExperience, earth.courses);

earth.teach("geography");
console.log(earth.courses);

earth.eat("chocolate");
