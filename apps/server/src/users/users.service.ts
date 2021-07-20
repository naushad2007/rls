import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import GoogleProfile from '@/auth/interface/google-profile.interface';

import CreateUserDTO from './dto/create-user.dto';
import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ id });

    if (user) {
      return user;
    }

    throw new HttpException(
      `Could not find user with id ${id}.`,
      HttpStatus.NOT_FOUND
    );
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ email });

    if (user) {
      return user;
    }

    throw new HttpException(
      'Incorrect username/password, please try again.',
      HttpStatus.NOT_FOUND
    );
  }

  async findOrCreate(
    profile: GoogleProfile,
    accessToken: string
  ): Promise<User> {
    const email = profile.emails[0].value;
    const user = await this.usersRepository.findOne({ email });

    if (user) {
      return user;
    }

    const newUser = this.usersRepository.create({
      email,
      name: profile.displayName,
      password: accessToken,
      provider: profile.provider,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async create(createUserDto: CreateUserDTO): Promise<User> {
    const newUser = this.usersRepository.create({
      ...createUserDto,
      provider: 'local',
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }
}
