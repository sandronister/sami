import * as mongoose from 'mongoose';


export const DatabseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory:():Promise<typeof mongoose> => mongoose.connect('mongodb://localhost/sami')
    }
        

]

