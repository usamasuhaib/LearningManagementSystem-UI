import { Student } from "../Models/student.model";
import { Subject } from "../Models/subject.model";


export interface ClassDto {


    classId?:number;
    className:string;
    numberOfStudents?:number;

    subjects?: Subject[];
    students?: Student[];

}
