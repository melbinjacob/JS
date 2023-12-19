const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor: "Hithesh"
}

// course.courseInstructor

const {courseInstructor : instructur} = course; // Object destructuring

console.log(instructur);


const navbar = () => {
    
}

navbar(company = "Hitesh")

// {
//     "Name" : "Melbin",
//     "Age" : 12,
//     "Place": "Kasargod"
// }


const trip = {
    name : "Ney year trip",
    budget: 2500,
    stay: "Tent stay"
}

const {budget:price} = trip

console.log(price);