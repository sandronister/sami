import {Document} from 'mongoose';

export interface BeneficiaryInterface extends Document{
    name: String,
    cpf: String,
    rg:String,
    birth: Date,
    plan: String,
    dependents: Number
}