import { IsNumberString, Validate } from 'class-validator';
import { Reef } from '../../reefs/reefs.entity';
import { EntityExists } from '../../validations/entity-exists.constraint';

export class ReefDataRangeDto {
  @IsNumberString()
  @Validate(EntityExists, [Reef])
  reefId: number;
}
