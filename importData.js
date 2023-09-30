import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('data/people.json', 'utf8'));

  for (const person of data) {
    const newPerson = await prisma.person.create({
      data: {
        name: person.name,
        portfolio: person.portfolio,
        twitter: person.twitter,
        linkedin: person.linkedin,
        skills: {
          create: [
            ...person.skills.design.map((skill) => ({ name: skill, type: 'design' })),
            ...person.skills.code.map((skill) => ({ name: skill, type: 'code' }))
          ]
        }
      }
    });
    console.log(`Inserted person: ${newPerson.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
