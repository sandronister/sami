import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './model/beneficiary.model';

@Injectable()
export class BeneficiaryService {

  constructor(
    @InjectModel('Beneficiary')
    private readonly beneficiaryModel:Model<Beneficiary>
  ){}


  async create(createBeneficiaryDto: CreateBeneficiaryDto):Promise<Beneficiary>{
    const beneficiary = new this.beneficiaryModel(createBeneficiaryDto);
    return beneficiary.save()
  }

  async findAll():Promise<Beneficiary[]> {
    return this.beneficiaryModel.find().exec()
  }

  async findOne(id: number):Promise<Beneficiary> {
    return this.beneficiaryModel.findById(id)
  }

  async update(id: number, updateBeneficiaryDto: UpdateBeneficiaryDto):Promise<Beneficiary> {
    const beneficiary = await this.findOne(id)

    beneficiary.name = updateBeneficiaryDto.name
    beneficiary.cpf = updateBeneficiaryDto.cpf
    beneficiary.rg = updateBeneficiaryDto.rg
    beneficiary.birth = updateBeneficiaryDto.birth
    beneficiary.dependents = updateBeneficiaryDto.dependents
    beneficiary.plan = updateBeneficiaryDto.plan

    return beneficiary.save()
  }

  async remove(id: number):Promise<boolean> {
    return this.beneficiaryModel.remove({_id:id})
  }
}
