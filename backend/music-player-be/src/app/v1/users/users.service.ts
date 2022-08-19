import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  public async findOne(id: string): Promise<UserDocument> {
    return this.userModel.findOne({ id });
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  public async remove(id: number): Promise<void> {
    return this.userModel.findByIdAndRemove(id);
  }
}