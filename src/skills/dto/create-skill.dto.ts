import { Type } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
export class CreateSkillDto {
    @IsString()
    public name: string;

    @IsBoolean()
    @Type(()=>Boolean)
    public state: boolean

}
