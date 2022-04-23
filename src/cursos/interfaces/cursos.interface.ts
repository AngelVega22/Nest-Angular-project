import { Document } from 'mongoose'

export interface Curso extends Document {
    readonly name: string;
    readonly descripcion: string;
    readonly imageURL: string;
    readonly createdAt: Date;
}