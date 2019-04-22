import { StudentCategory } from '../enums/student-category-enum'
import { DocumentType } from '../enums/document-type.enum'
export interface Student {
    id?: number,
    name: string,
    category: string,
    documents: DocumentType[],
    dateOfBirth: Date,
    fathersName: string,
    mothersName: string,
    lastScore: number
}