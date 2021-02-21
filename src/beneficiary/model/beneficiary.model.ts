import {Document, Schema} from 'mongoose';

export const BeneficiarySchema = new Schema({
    name:String,
    cpf:String,
    rg:String,
    birth:Date,
    plan:String,
    dependents:Number
})

export interface Beneficiary extends Document{
    id:String,
    name: String,
    cpf: String,
    rg:String,
    birth: Date,
    plan: String,
    dependents: Number
}