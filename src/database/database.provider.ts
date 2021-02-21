import * as mongoose from 'mongoose';


export const databseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory:():Promise<typeof mongoose> => mongoose.connect('mongodb://localhost/sami')
    }
        

]

