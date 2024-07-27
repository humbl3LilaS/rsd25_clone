const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

prisma.user.create({
                     data: {
                       name : "Bob",
                       bio  : "Never Forgive Never Forget",
                       posts: {
                         create: [
                           {content: "First Post"},
                           {content: "Second Post"},
                         ],
                       },
                     },
                   })
      .then(() => console.log("Creation success"))
      .catch(e => console.log(e));