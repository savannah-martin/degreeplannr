// alert("IT WORKS!");


//BIB 121	Life of Christ	2	A thorough textual study of the life of Jesus the Christ. Emphasis is given to his virgin birth, his message and ministry, his crucifixion, his resurrection, and his ascension, all leading to a greater awareness of his greatness as the Son of God and Savior of the world. Moral, doctrinal, historical, and practical aspects of the life of Christ are also emphasized. (Text course.)		Fall	LAC	Bible

//BIB 122	Acts of the Apostles	2	The story of the early church in Acts. Attention is given to cases of conversion, the outstanding personalities in Acts, and the missionary journeys of Paul. This is the missions book of the New Testament.		Spring	LAC	Bible

let lacCourses = [ 
    { 
        id:"BIB 121",
        name: "Life of Christ",
        creditHours: 2,
        description:"A thorough textual study of the life of Jesus the Christ. Emphasis is given to his virgin birth, his message and ministry, his crucifixion, his resurrection, and his ascension, all leading to a greater awareness of his greatness as the Son of God and Savior of the world. Moral, doctrinal, historical, and practical aspects of the life of Christ are also emphasized. (Text course.)",
        semester : "Fall",
        category: "LAC",
        subcategory: "Bible"
    },
    { 
        id:"BIB 122",
        name: "Acts of the Apostles",
        creditHours: 2,
        description:"The story of the early church in Acts. Attention is given to cases of conversion, the outstanding personalities in Acts, and the missionary journeys of Paul. This is the missions book of the New Testament.",
        semester : "Spring",
        category: "LAC",
        subcategory: "Bible"
    }
];

let lacReqs = document.getElementById("lac-reqs");

for(let i=0; i < 10; i++) {
    lacReqs.innerHTML += `<p> Item ${i}</p>`;
}
