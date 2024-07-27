const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

prisma.user.update({
                     where: {id: 1},
                     data : {name: "Bobby"},
                   })
      .then(() => console.log("update successful"))
      .catch(e => console.log(e));
