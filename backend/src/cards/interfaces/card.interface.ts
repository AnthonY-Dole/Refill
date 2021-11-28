import { Document } from 'mongoose';

export interface Card extends Document {
    readonly name: string;
    readonly date: string;
    readonly activationCode: number
    readonly color: string;
    readonly credit: string;
}
