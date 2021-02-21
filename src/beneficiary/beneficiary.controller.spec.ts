import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs';
import { BeneficiaryController } from './beneficiary.controller';
import { BeneficiaryService } from './beneficiary.service';

describe('BeneficiaryController', () => {
  let controller: BeneficiaryController;

  beforeEach(async () => {
     const service ={
       remove:async()=>Promise.resolve(true)
     }

     controller = new BeneficiaryController(service as any)
  });

  it('remove', () => {
    expect(controller.remove('9')).toBeTruthy()
  });
});
