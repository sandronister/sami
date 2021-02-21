import * as mongoose from 'mongoose';


export const BeneficiarySchema = new mongoose.Schema({
    name:String,
    cpf:String,
    rg:String,
    birth:Date,
    plan:String,
    dependents:Number
})