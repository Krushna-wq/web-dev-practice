const obj = {
    name: "XYZ",
    RollNo: 21,

      callObj(){
        console.log(`Name is ${this.name} And Roll Number is ${this.RollNo}`);

        function calledbyonbj(){
               console.log(`${this.name} is passed the exam, roll number is ${this.RollNo} `)
        }
        calledbyonbj();

        const arrangeoBj = () => {
            console.log(`award goes to ${this.name} and the roll number is ${this.RollNo}`)
        }
        arrangeoBj();
    }
    
};

obj.callObj();


const students = {
    name: "robert",
    rollno:21,
    college: "XYZ university",

    callStudent() {
            console.log(`roll number ${this.rollno} student name is ${this.name} from ${this.college}`)

            function rollcall(){
                console.log(`roll Number of student is ${this.rollno}`);
            }
               rollcall();
    }
}

students.callStudent();