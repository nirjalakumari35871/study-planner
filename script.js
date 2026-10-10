function addSubject() {
    let subject = document.getElementById("subjectInput").value;

    if (subject !== "") {
        let li = document.createElement("li");

        li.innerHTML = subject +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

        document.getElementById("subjectList").appendChild(li);

        document.getElementById("subjectInput").value = "";
    }
}



function addTask() {
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;

    if (task !== "") {
        let li = document.createElement("li");

        li.innerHTML = task + " - " + date +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

        document.getElementById("taskList").appendChild(li);

        document.getElementById("taskInput").value = "";
        document.getElementById("taskDate").value = "";
    }
}
function addExam() {
    let exam = document.getElementById("examInput").value;
    let date = document.getElementById("examDate").value;

    if (exam !== "" && date !== "") {
        let li = document.createElement("li");

        li.innerHTML = exam + " : " + date;

        document.getElementById("examList").appendChild(li);

        document.getElementById("examInput").value = "";
        document.getElementById("examDate").value = "";
    }
}
function addExam() {
    let exam =
    document.getElementById("examInput").value;

    let date =
    document.getElementById("examDate").value;

    if (exam !== "" && date !== "") {
        let li = document.createElement("li");

        li.innerHTML =
            exam + " : " + date;

        document.getElementById("examList")
        .appendChild(li);

        document.getElementById("examInput").value = "";
        document.getElementById("examDate").value = "";
    }
}
function calculateAttendance() {
    let total =
    document.getElementById("totalClasses").value;

    let attended =
    document.getElementById("attendedClasses").value;

    if (total !== "" && attended !== "") {

        let percentage =
        (attended / total) * 100;

        document.getElementById(
            "attendanceResult"
        ).innerHTML =
        "Attendance : " +
        percentage.toFixed(2) + "%";
    }
}