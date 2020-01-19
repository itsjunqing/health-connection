let patientsList = []

class Patient {
    constructor(name, studentId, dateOfBirth, age, registrationDate, condition, info, admissionReason) {
        this.name = name;
        // this.university = university;
        this.studentId = studentId;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.registrationDate = registrationDate;
        this.condition = condition;
        this.info = info;
        this.admissionReason = admissionReason;
    }
}
$.getJSON("https://v2-api.sheety.co/510691fcb77df6da24df16a1962065ca/starterhacks/students", function(data){
    $.each(data.students, function(property, value){
        // const patient = new Patient(value.name, value.studentId, value.dateOfBirth, 
        //     value.agee, value.registrationDate, value.condition, value.info, value.admissionReason);
        // patientsList.push(patient);

        $("tbody").append("<tr><td>" + 
                        value.name + "</td><td>" + 
                        value.studentId + "</td><td>" +
                        value.dateOfBirth + "</td><td>" +
                        value.age + "</td><td>" +
                        value.registrationDate + "</td><td>" +
                        value.condition + "</td><td>" +
                        value.info + "</td><td>" +
                        value.admissionReason + "</td></tr>")
    })
})

console.log(patientsList)
console.log("testing");
// request.send();

