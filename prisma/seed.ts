import { PrismaClient } from "@prisma/client";
import { courses } from "../data/courses";
import { members } from "../data/members";

const prisma = new PrismaClient()

async function main() {
    await prisma.member.createMany({
        data: members,
    })

    await prisma.course.createMany({
        data: courses,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })