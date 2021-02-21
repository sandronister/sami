import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { BeneficiaryInterface } from './interface/beneficiary.interface';

@Injectable()
export class BeneficiaryService {

  constructor(
    @Inject('BENEFICIARY_MODEL')
    private beneficiaryModel:Model<BeneficiaryInterface>
  ){}


  async create(createBeneficiaryDto: CreateBeneficiaryDto):Promise<BeneficiaryInterface>{
    const beneficiary = new this.beneficiaryModel(createBeneficiaryDto);
    return beneficiary.save()
  }

  async findAll():Promise<BeneficiaryInterface[]> {
    return this.beneficiaryModel.find().exec()
  }

  async findOne(id: number):Promise<BeneficiaryInterface> {
    return this.beneficiaryModel.findById(id)
  }

  async update(id: number, updateBeneficiaryDto: UpdateBeneficiaryDto):Promise<BeneficiaryInterface> {
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
