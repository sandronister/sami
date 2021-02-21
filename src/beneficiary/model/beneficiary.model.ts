import {Connection} from 'mongoose';
import {BeneficiarySchema} from '../schema/beneficiary.schema'

export const BeneficiaryModel = [
    {
        provide:'BENEFICIARY_MODEL',
        useFactory:(connetion:Connection)=> connetion.model('Beneficiary',BeneficiarySchema),
        inject:['DATABASE_CONNECTION']
    }
]
