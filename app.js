// alert("IT WORKS!");


//BIB 121	Life of Christ	2	A thorough textual study of the life of Jesus the Christ. Emphasis is given to his virgin birth, his message and ministry, his crucifixion, his resurrection, and his ascension, all leading to a greater awareness of his greatness as the Son of God and Savior of the world. Moral, doctrinal, historical, and practical aspects of the life of Christ are also emphasized. (Text course.)		Fall	LAC	Bible

//BIB 122	Acts of the Apostles	2	The story of the early church in Acts. Attention is given to cases of conversion, the outstanding personalities in Acts, and the missionary journeys of Paul. This is the missions book of the New Testament.		Spring	LAC	Bible

//let lacCourses = JSON.parse("courses.js");
//console.log(lacCourses);

const lacCourses = [
    {
    "Course ID": "BIB 121",
    "Course Name": "Life of Christ",
    "Credit Hours": "2",
    "Course Description": "A thorough textual study of the life of Jesus the Christ. Emphasis is given to his virgin birth, his message and ministry, his crucifixion, his resurrection, and his ascension, all leading to a greater awareness of his greatness as the Son of God and Savior of the world. Moral, doctrinal, historical, and practical aspects of the life of Christ are also emphasized. (Text course.)",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Bible"
    },
    {
    "Course ID": "BIB 122",
    "Course Name": "Acts of the Apostles",
    "Credit Hours": "2",
    "Course Description": "The story of the early church in Acts. Attention is given to cases of conversion, the outstanding personalities in Acts, and the missionary journeys of Paul. This is the missions book of the New Testament.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Bible"
    },
    {
    "Course ID": "BIB 346",
    "Course Name": "Foundations of Faith",
    "Credit Hours": "3",
    "Course Description": "Foundational principles for the development of a personal faith. This course will challenge the student to engage the essentials of the Christian belief in God, the Bible, and Jesus Christ as they impact spiritual formation in our contemporary world.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Bible"
    },
    {
    "Course ID": "BIB 446",
    "Course Name": "Christian Evidences",
    "Credit Hours": "3",
    "Course Description": "An examination of evidences that prove the Christian faith is from God. Attention is given to systems of thought that oppose the Christian faith, and a response to each is offered. The arguments for the existence of God, the inspiration of the Bible, and the deity of Jesus are considered in detail. This course contains a significant writing component.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Bible"
    },
    {
    "Course ID": "ENG 101",
    "Course Name": "English Composition I",
    "Credit Hours": "3",
    "Course Description": "First-year composition. This course focuses on student development of clear thought and expression through writing. Class time will be devoted to exploring and developing ideas, practicing steps of the writing process, and discussing various styles and patterns of exposition. This course is designed to provide students with tools in critical analysis and effective communication used in subsequent courses.",
    "Prerequisite": "A minimum score of 17 on the English portion of the ACT or a passing grade in ENG 100 Introduction to College Writing.",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Written Communication"
    },
    {
    "Course ID": "ENG 102",
    "Course Name": "English Composition II",
    "Credit Hours": "3",
    "Course Description": "An introduction to research and argumentative writing. Students write research papers, critical essays, and argumentative essays using MLA style.",
    "Prerequisite": "ENG 101 English Composition I or the equivalent.",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Written Communication"
    },
    {
    "Course ID": "COM 140",
    "Course Name": "Speech Communication ",
    "Credit Hours": "3",
    "Course Description": "An introduction to the basic concepts of human communication theory with instruction and practice in interpersonal communication, small group communication, and public speaking.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Oral Communication"
    },
    {
    "Course ID": "MAT 100",
    "Course Name": "Fundamental Concepts of Mathematics ",
    "Credit Hours": "3",
    "Course Description": "A study of fundamental concepts in mathematical topics which may include sets, logic, systems of numeration, systems of weight and measure, algebra, geometry, consumer mathematics, probability, and statistics. This course does not prepare students for MAT 101 College Algebra.",
    "Prerequisite": "Required proficiency score of 17 or better on the math portion of the ACT or proficiency score on the ACCUPLACER.",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Quantitative Reasoning"
    },
    {
    "Course ID": "MAT 101",
    "Course Name": "College Algebra",
    "Credit Hours": "3",
    "Course Description": "A study of functions and graphs, polynomial functions, rational and root functions, and exponential and logarithmic functions. This course may also include systems of equations and inequalities, sequences, series, and probability.",
    "Prerequisite": "Two (2) years of high school algebra.",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Quantitative Reasoning"
    },
    {
    "Course ID": "MAT 120",
    "Course Name": "Pre-Calculus ",
    "Credit Hours": "4",
    "Course Description": "A study of polynomial and rational functions, exponential and logarithmic functions, trigonometric functions, and trigonometric identities. This course is designed to strengthen a student's technical skills and conceptual understanding in mathematics in order to be prepared for calculus.",
    "Prerequisite": "Two (2) years of high school algebra and a score of 24 or better on the math portion of the ACT or MAT 101 College Algebra with a minimum grade of \"C.\"",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Quantitative Reasoning"
    },
    {
    "Course ID": "MAT 122",
    "Course Name": "Analytics and Calculus I",
    "Credit Hours": "4",
    "Course Description": "A study of limits, derivatives, applications of derivatives, integrals, and applications of integrals. These topics are studied for a variety of functions of a single variable including polynomial, rational, root, trigonometric, inverse trigonometric, exponential, logarithmic, and hyperbolic functions.",
    "Prerequisite": "A high school trigonometry or pre-calculus course and a score of 27 or better on the math portion of the ACT or MAT 120 Pre-Calculus with a minimum grade of \"C.\"",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Quantitative Reasoning"
    },
    {
    "Course ID": "MAT 235",
    "Course Name": "Introducing Statistics",
    "Credit Hours": "3",
    "Course Description": "An introduction to basic statistical techniques, including frequency distributions, averages, data analysis, samplings, tests of hypothesis, linear regression, chi-square tests, and related areas in probability theory.",
    "Prerequisite": "Two (2) years of high school algebra and required proficiency score of 21 or better on math portion of the ACT or proficiency score on the ACCUPLACER.",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Quantitative Reasoning"
    },
    {
    "Course ID": "BIB/FAM 230",
    "Course Name": "Marriage and the Family",
    "Credit Hours": "3",
    "Course Description": "An introduction to the basic principles that are needed in creating a happy and successful marriage and family life. A Biblical perspective is used to consider such topics as sex roles, dating, marriageability, mixed marriages, engagement, sex adjustment, in-law adjustment, financial adjustment, life insurance, divorce, reproduction, family planning, and child rearing.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Behavioral Sciences"
    },
    {
    "Course ID": "PSY 210",
    "Course Name": "General Psychology",
    "Credit Hours": "3",
    "Course Description": "An introduction to the science of psychology. The course prepares the student for further study in the science of human behavior and mental processes",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Behavioral Sciences"
    },
    {
    "Course ID": "SOC 241",
    "Course Name": "General Sociology",
    "Credit Hours": "3",
    "Course Description": "An introduction to the general principles of sociology, giving a broad perspective of the nature of society and its problems in terms of social institutions, forces, and changes.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Behavioral Sciences"
    },
    {
    "Course ID": "SWK 251",
    "Course Name": "Human Behavior in the Social Environment I: Childhood and Adolescents",
    "Credit Hours": "3",
    "Course Description": "A study of a people-in-systems theoretical orientation for knowledge and understanding of human behavior in the social environment. The student will be introduced to a range of concepts that relate to human development and diversity within social systems from childhood to adolescence and that will be useful to the assessment of and intervention with people/system problems as they are encountered in social work practice.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall",
    "Category": "LAC",
    "Subcategory": "Behavioral Sciences"
    },
    {
    "Course ID": "BIO 100",
    "Course Name": "Human Biology",
    "Credit Hours": "3",
    "Course Description": "A non-biology majors introduction to the basic structure and function of the human body and human genetics. Areas to which the students are introduced include: tissues, organs, and organ systems of the human body and their functions. ",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "BIO 105",
    "Course Name": "Principles of Conservation Biology",
    "Credit Hours": "3",
    "Course Description": "A study of conservation biology for both majors and non-majors. Emphasis will be on basic biological concepts that will enable students to appreciate and understand their role within the living world. Topics will include, but are not limited to, scientific method, ecosystems, genetic diversity, extinction, maintaining biodiversity, and human influences on biodiversity.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "BIO 110",
    "Course Name": "Principles of Biology",
    "Credit Hours": "3",
    "Course Description": "A study of biology for non-majors. Emphasis will be on basic biological concepts that will enable students to appreciate the living world and their relationship to it. Topics will include, but are not limited to, scientific method, the cell and genetic basis of life, mitosis and meiosis reproduction, biodiversity, and ecology.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "BIO 111",
    "Course Name": "General Biology I",
    "Credit Hours": "3",
    "Course Description": "A general survey of the major kingdoms (except Animalia) and the phyla of plants throughout the world. This course introduces students to basic cell structure, energy transfer, metabolic processes, reproduction, taxonomic, and ecological aspects of plants.",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "BIO 112",
    "Course Name": "General Biology II",
    "Credit Hours": "4",
    "Course Description": "A general survey of the major animal-like protists and animal phyla throughout the world. This course also introduces students to basic cell structure, cell division, reproduction, and genetics.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "BIO 211",
    "Course Name": "Human Anatomy & Physiology I",
    "Credit Hours": "4",
    "Course Description": "Part one of a two-semester study of the structure and function of the human body. This course orients the student with the major chemistry, cell biology, and tissue structure of the human body then continues with examination of the gross and microscopic anatomy and physiology of the integumentary, skeletal, muscular, and nervous body systems.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "CHE 121",
    "Course Name": "General Chemistry I WITH",
    "Credit Hours": "3",
    "Course Description": "A study of the basic concepts of general chemistry. This study will include the atomic theory, atomic structure, chemical bonding, the periodic law, and calculations relating to stoichiometry and the gas laws.",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "CHE 121L",
    "Course Name": "General Chemistry I Lab",
    "Credit Hours": "1",
    "Course Description": "Special emphasis is given to quantitative methods.",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "PHS 111",
    "Course Name": "Physical Science I",
    "Credit Hours": "3",
    "Course Description": "An introduction to the physical sciences including topics from geology, introductory chemistry, and astronomy.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "PHS 112",
    "Course Name": "Physical Science II",
    "Credit Hours": "3",
    "Course Description": "An introduction to the physical sciences including topics from general physics and meteorology.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "PHS 201",
    "Course Name": "General Physics I",
    "Credit Hours": "4",
    "Course Description": "An algebra-based study of physics. This course introduces students to kinematics in one and two dimensions, kinetics, friction, work, energy, momentum, rotational dynamics, gravitation, static equilibrium, fluid mechanics, thermodynamics, waves, and sound.",
    "Prerequisite": "MAT 120 Pre-Calculus.",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "PHS 211",
    "Course Name": "Physics for Science and Engineering I",
    "Credit Hours": "4",
    "Course Description": "A calculus-based study of physics designed primarily for students majoring in chemistry, mathematics, computer science, and pre-engineering. This course is required of all pre-engineering, chemistry, and biochemistry students and is recommended for students certifying to teach physics in the secondary schools. This course introduces students to kinematics in one and two dimensions, kinetics, friction, work, energy, momentum, rotational dynamics, gravitation, static equilibrium, fluid mechanics, thermodynamics, waves, and sound.",
    "Prerequisite": "MAT 122 Analytics and Calculus I.",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Natural Sciences"
    },
    {
    "Course ID": "HIS 111",
    "Course Name": "Survey of Civilization I",
    "Credit Hours": "3",
    "Course Description": "A survey of world history from the fourth millennium B.C. into the 16th century. Particular attention is paid to change over time, connections and cultural exchanges between different peoples, and to comparisons between different civilizations.",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "History"
    },
    {
    "Course ID": "HIS 112",
    "Course Name": "Survey of Civilization II",
    "Credit Hours": "3",
    "Course Description": "A continuation of HIS 111. This course surveys world history from the 16th century to the present and examines the relationships between nationalism, industrialization, imperialism, political ideologies, and globalization.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "History"
    },
    {
    "Course ID": "HIS 221",
    "Course Name": "American History I",
    "Credit Hours": "3",
    "Course Description": "A survey of United States history from pre-Columbian times to 1877. This course is a survey of the major events including colonization, American Revolution, national expansion, the Civil War, and Reconstruction.",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "History"
    },
    {
    "Course ID": "HIS 222",
    "Course Name": "American History II",
    "Credit Hours": "3",
    "Course Description": "A continuation of HIS 221. This course is a survey of major developments including expansion, industrialization, reform, foreign policy, politics, and cultural changes.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "History"
    },
    {
    "Course ID": "POL 251",
    "Course Name": "Fundamentals of Political Geography",
    "Credit Hours": "3",
    "Course Description": "An introduction to political geography. This course will explore how geography shapes our politics and how politics, in turn, shapes and has shaped the geography of the globe. Major topics include the origin, location, and evolution of states, the defining and drawing of political boundaries, territorial conflicts and disputes, the impact of boundaries on personal and cultural identity, centripetal and centrifugal forces that encourage the success or failure of political units, effects of colonialism, and geopolitics.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "History"
    },
    {
    "Course ID": "ART 110",
    "Course Name": "Art Appreciation",
    "Credit Hours": "3",
    "Course Description": "An introductory course to acquaint students with the principles of art found in art works of various periods and cultures. A chronological survey of artists and their work is explored emphasizing the elements of art and the processes involved in their production.",
    "Prerequisite": "",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ART 234",
    "Course Name": "Introduction to Creativity",
    "Credit Hours": "3",
    "Course Description": "A course emphasizing the tools, skills, and processes used in creative thinking and creative problem-solving to develop novel and useful ideas. This course includes a significant writing component. Prerequisites: Approval of instructor.",
    "Prerequisite": "",
    "Semester Offered": "Offered On Sufficient Demand.",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 225",
    "Course Name": " English Literature I",
    "Credit Hours": "3",
    "Course Description": "A survey of British literature from the Anglo-Saxon period to the present. This course exposes students to a wide range of writers, periods, literary movements, and currents of thought in iterature from the English-speaking world, excluding the United States. This course meets the University's Liberal Arts Core requirement for Creative and Critical Works.",
    "Prerequisite": "ENG 101 English Composition I1",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 226",
    "Course Name": "English Literature II",
    "Credit Hours": "3",
    "Course Description": "A survey of English literature from the Romantic period to the present. This course exposes students to a wide range of writers, periods, literary movements, and currents of thought in later English literature.",
    "Prerequisite": "ENG 102 English Composition II",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 235",
    "Course Name": "American Literature I",
    "Credit Hours": "3",
    "Course Description": "A survey of American literature from the colonial period to the present. This course exposes students to a wide range of writers, periods, literary movements, and currents of thought in American literature. This course meets the University's Liberal Arts Core requirement for Creative and Critical Works.",
    "Prerequisite": "ENG 101 English Composition I ",
    "Semester Offered": "Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 236",
    "Course Name": "American Literature II",
    "Credit Hours": "3",
    "Course Description": "A survey of American literature from the Civil War to the present. This course exposes students to a wide range of writers, periods, literary movements, and currents of thought in later American literature.",
    "Prerequisite": " ENG 102 English Composition II ",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 245",
    "Course Name": "World Literature I",
    "Credit Hours": "3",
    "Course Description": "A survey of world literature from ancient times through the 16th century. This course exposes students to a wide range of writers, periods, and currents of thought in world literature.",
    "Prerequisite": "ENG 102 English Composition II",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "ENG 246",
    "Course Name": "World Literature II",
    "Credit Hours": "3",
    "Course Description": "A survey of western literature, excluding British and American works, from the 17th century to the present. This course exposes students to a wide range of writers, periods, literary movements, and currents of thought in modern western literature.",
    "Prerequisite": "ENG 102 English Composition II",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "MUS 110",
    "Course Name": "Music Appreciation",
    "Credit Hours": "3",
    "Course Description": "A study of the principles and techniques that underlie artistic creation in music, such as form, theme, rhythm, mood, tone, and harmony and their relation to principles in other art media. A brief survey of the history of music is made in which the various periods in music with their characteristics and stylistic differences are emphasized. ",
    "Prerequisite": "",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "MUS 214",
    "Course Name": "Development of American Music",
    "Credit Hours": "3",
    "Course Description": "A history of aspects of American music beginning with Native American music. Emphasis will be given to a study of music from 1900 to present including the study of popular music and performers.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "PHI 243",
    "Course Name": "Introduction to Philosophy",
    "Credit Hours": "3",
    "Course Description": "Introductory principles and problems of philosophy. Consideration is given to various views of truth, nature, man, and values. This course includes a significant writing component. ",
    "Prerequisite": "",
    "Semester Offered": "Spring Even",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "PHI 245",
    "Course Name": "History of Philosophy I",
    "Credit Hours": "3",
    "Course Description": "The history of philosophy from the perspectives of representative philosophers in the ancient and medieval periods. Emphasis is given to analysis and to criticism. This course includes a significant writing component. ",
    "Prerequisite": "",
    "Semester Offered": "Spring Odd",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "PHI 246",
    "Course Name": "History of Philosophy II",
    "Credit Hours": "3",
    "Course Description": "The history of philosophy from the perspectives of representative philosophers in the modern and contemporary periods. Emphasis is given to analysis and to criticism. This course includes a significant writing component. ",
    "Prerequisite": "",
    "Semester Offered": "Spring Even",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "THE 160",
    "Course Name": "Introduction to Theatre",
    "Credit Hours": "3",
    "Course Description": "A survey of theatre practice and principles. The course provides an audience-centered overview of all aspects of theatre production from play writing to play presentation. Attendance at FHU Theatre productions is required.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "THE 265",
    "Course Name": "Acting I",
    "Credit Hours": "3",
    "Course Description": "Introduction to basic acting using Stanislavski techniques. Emphasis is on character development, vocal delivery, and physical behavior required to play a role in contemporary theatre. Scene work and journaling required. Attendance at FHU Theatre productions is required.",
    "Prerequisite": "",
    "Semester Offered": "Fall",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "THE 299A/399A",
    "Course Name": "New York Theatre Survey",
    "Credit Hours": "3",
    "Course Description": "An overview of the history of New York theatre, focusing primarily on Manhattan's Broadway theatre district. The student will explore the cultural, artistic, and economic issues central to Broadway theatre. The course includes a trip to New York and attendance of several Broadway shows. Cost of New York trip is in addition to the comprehensive charge.",
    "Prerequisite": "",
    "Semester Offered": "Spring",
    "Category": "LAC",
    "Subcategory": "Critical and Creative Works"
    },
    {
    "Course ID": "BIB/HUM 495",
    "Course Name": "Values in Human Thought",
    "Credit Hours": "3",
    "Course Description": "An exploration of value issues and opportunities for further learning in the liberal arts and sciences. This course will focus on Christian perspectives in value questions that the graduate will confront in art, music, literature, economics, science, politics, and other related areas.",
    "Prerequisite": "Senior standing",
    "Semester Offered": "Summer, Fall, Spring",
    "Category": "LAC",
    "Subcategory": ""
    }
];


let lacReqs = document.getElementById("lac-reqs");

for (let lacCourse of lacCourses) 
{
    console.log(lacCourse);
    lacReqs.innerHTML += 
        `<div class="card my-2">
        <div class="card-body">
          <div class="row">
            <h5 class="card-title col">
              <b>${lacCourse["Course Name"]}</b>
            </h5>
            <p class="col-3 text-end">${lacCourse["Credit Hours"]} hours</p>
          </div>

          <div class="row">
            <div class="col">
              <p class="card-subtitle"> ${lacCourse["Course ID"]}</p>
            </div>
            <div class="col-4 text-end">
              <span class="text-muted">${lacCourse["Semester Offered"]}</span>
            </div>
          </div>
          <a
            href="#${convertID(lacCourse["Course ID"])}"
            class="card-link fw-light"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            >Course description ›</a
          >
          <div
            class="course-description collapse card-text"
            id="${convertID(lacCourse["Course ID"])}"
          >
            <p class="text-muted card-text">
            ${lacCourse["Course Description"]}
            </p>
            
          </div>
        </div>
      </div>`;
}

// "CIS 171" => "cis171"

function convertID(courseID) {
    return courseID.replace(" ", "")
            .replace("/","-")
            .toLowerCase();
}

// for(let i=0; i < 10; i++) {
//     lacReqs.innerHTML += `<div class="card"> Item ${i}</div>`;
// }
