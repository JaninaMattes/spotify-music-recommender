import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop()
    id: string;
    
    @Prop()
    displayName: string;

    @Prop()
    profileUrl: string;

    @Prop()
    accessToken: string;

    @Prop()
    refreshToken: string;

    @Prop()
    expiresAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);