import { IsDefined, IsEnum, IsMongoId, IsOptional, ValidateNested } from 'class-validator';
import { ChannelTypeEnum, IEmailBlock } from '@novu/shared';
import { CommandHelper } from '../../../shared/commands/command.helper';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';
import { ICta } from '@novu/shared';

export class CreateMessageTemplateCommand extends EnvironmentWithUserCommand {
  static create(data: CreateMessageTemplateCommand) {
    return CommandHelper.create<CreateMessageTemplateCommand>(CreateMessageTemplateCommand, data);
  }

  @IsDefined()
  @IsEnum(ChannelTypeEnum)
  type: ChannelTypeEnum;

  @IsOptional()
  name?: string;

  @IsOptional()
  subject?: string;

  @IsDefined()
  content: string | IEmailBlock[];

  @IsOptional()
  contentType: 'editor' | 'customHtml';

  @IsOptional()
  @ValidateNested()
  cta: ICta;

  @IsMongoId()
  parentChangeId: string;
}
