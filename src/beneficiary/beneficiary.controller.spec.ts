import { BeneficiaryController } from './beneficiary.controller';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';

describe('BeneficiaryController', () => {
  let controller: BeneficiaryController;
  let mock:CreateBeneficiaryDto = new CreateBeneficiaryDto()

  beforeEach(async () => {

    mock.name = 'Teste'
    mock.cpf = '111.111.111-22'
    mock.rg = '23333232344'
    mock.birth = new Date('1989-09-09')
    mock.dependents = 9
    mock.plan = 'Basic'

    const service = {
      create: async () => Promise.resolve(mock),
      remove: async () => Promise.resolve(true),
      findAll: async () => Promise.resolve([]),
      findOne:async()=>Promise.resolve(),
      update:async()=>Promise.resolve()
    }

    controller = new BeneficiaryController(service as any)
  });

  it('remove', () => {
    expect(controller.remove('9')).toBeTruthy()
  });

  it('Create', async() => {
    expect(await controller.create(mock)).toBe(mock)
  })

  it('Find All',()=>{
    expect(controller.findAll()).toBeDefined()
  })

  it('Find One',async()=>{
    expect(controller.findOne('4')).toBeDefined()
  })

  it('Update',()=>{
    expect(controller.update('9',mock)).toBeDefined()
  })
});
