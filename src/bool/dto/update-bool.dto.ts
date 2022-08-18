import { PartialType } from '@nestjs/mapped-types';
import { CreateBoolDto } from './create-bool.dto';

export class UpdateBoolDto extends PartialType(CreateBoolDto) {}
