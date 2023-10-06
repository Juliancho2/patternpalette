import { patterns } from '../src/static';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function Main () {
  for (const pat of patterns) {
    const { name, background, backgroundColor, backgroundPosition, backgroundSize, opacity } = pat;

    await prisma.pattern.create({
      data: {
        name,
        background,
        backgroundPosition,
        backgroundColor,
        backgroundSize,
        favorite: false,
        opacity
      }
    });
  }
}

Main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    await prisma.$disconnect();

    process.exit(1);
  });
