import {ApiProperty} from '@nestjs/swagger'

export class CreateBeneficiaryDto {

    @ApiProperty()
    name:string;

    @ApiProperty()
    cpf:string;

    @ApiProperty()
    rg:string;

    @ApiProperty()
    birth:Date;

    @ApiProperty()
    plan:String;

    @ApiProperty()
    dependents:Number;

}
