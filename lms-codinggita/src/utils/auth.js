export const students = [
  {
    uid: "108623",
    password: "123456",
    name: "Jilan Mansuri",
    email: "jilan2410@gmail.com",
    mobile: "7984088939",
    university: "SUxCG 714",

    image: "https://avatars.githubusercontent.com/u/224968812?v=4",

    attendance: [
      {
        semester: "Semester 1",
        startDate: "31/07/2025",
        endDate: "28/01/2026",
        present: 258,
        total: 272,
        bonus: 0,
      },
      {
        semester: "Semester 2",
        startDate: "29/01/2026",
        endDate: "30/06/2026",
        present: 166,
        total: 193,
        bonus: 1,
      }
    ],


    subjects: [
      "SU11 - GIT & GITHUB",
      "SU12 - C Language",
      "SU13 - HTML/CSS/JS",
      "SU14 - UI/UX FIGMA",
      "SU15 - MATHS",
      "SU16 - JavaScript",
      "SU0201 - ReactJS",
      "SU0202 - NodeJS",
      "SU0203 - NoSQL",
      "SU0204 - OOPS",
      "SU0205 - Maths 2",
      "SU0206 - EVS",
      "SU0207 - IR 01",
      "SU0208 - IR 02",
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};
