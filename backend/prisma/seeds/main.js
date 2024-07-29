const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const {UserSeeder} = require("./Userseeder");
const {PostSeeder} = require("./PostSeeder");
const {CommentSeeder} = require("./CommentSeeder");

async function main() {
  try {
    await UserSeeder();
    await PostSeeder();
    await CommentSeeder();
  } catch (e) {
    console.log(e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();