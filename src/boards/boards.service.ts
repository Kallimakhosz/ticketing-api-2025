import { Injectable } from '@nestjs/common';
import { Boards, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  async findAll(): Promise<Boards[]> {
    return await this.prisma.boards.findMany();
  }

  async indOne(id: number) {
    return await this.prisma.boards.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBoardDto: Prisma.BoardsUpdateInput) {
    return await this.prisma.boards.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.boards.delete({
      where: { id },
    });
  }
}
