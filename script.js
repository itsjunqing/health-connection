let patientsList = []

class Patient {
    constructor(name, university, studentId, dateOfBirth, age, registrationDate, condition, info, admissionReason) {
        this.name = name;
        this.university = university;
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
        const patient = new Patient(value.name, value.university, value.studentId, value.dateOfBirth, 
            value.age, value.time, value.registrationDate, value.condition, value.info, value.admissionReason);
        patientsList.push(patient);
    })
})
console.log("testing");
// request.send();

