import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Daniel',
    //         email: 'daniel@gmail.com'
    //     }
    // })
    //const users = await prisma.user.findMany()
    // const userWithPost =  await prisma.user.create(
    //     {
    //         data: {
    //             name: 'Bob',
    //             email: 'bob@gmail.com',
    //             posts: {
    //                 create: {
    //                     title: 'Hello World',
    //                 }
    //             }
    //         }
    //     })
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })