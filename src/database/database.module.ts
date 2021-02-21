import { Module } from '@nestjs/common';
import { DatabseProvider } from './database.provider';

@Module({
  providers: [...DatabseProvider],
  exports: [...DatabseProvider],
})
export class DatabaseModule {}