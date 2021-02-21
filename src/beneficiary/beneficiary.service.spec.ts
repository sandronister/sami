import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs';
import { BeneficiaryService } from './beneficiary.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { Beneficiary } from './model/beneficiary.model';


describe('BeneficiaryService', () => {
  let service: BeneficiaryService;
  let mock = new CreateBeneficiaryDto()

  beforeEach(async () => {
    const model = {
      save: async () => Promise.resolve(),
      remove: async () => Promise.resolve(true),
      findAll: async () => Promise.resolve([]),
      findOne:async()=>Promise.resolve(),
      update:async()=>Promise.resolve()
    }
    service = new BeneficiaryService(model as any)

    mock.name = 'Teste'
    mock.cpf = '111.111.111-22'
    mock.rg = '23333232344'
    mock.birth = new Date('1989-09-09')
    mock.dependents = 9
    mock.plan = 'Basic'

  });

  it('Remove', () => {
    expect(service.remove(9)).toBeTruthy()
  });

  it('Create', () => {
    expect(service.create(mock)).toBeDefined()
  })

  it('Find All',()=>{
    expect(service.findAll()).toBeDefined()
  })

  it('Find One',async()=>{
    expect(service.findOne(4)).toBeDefined()
  })

  it('Update',()=>{
    expect(service.update(9,mock)).toBeDefined()
  })
});
