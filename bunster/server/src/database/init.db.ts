import { PrismaClient } from "@prisma/client";

export async function initDataBase(prisma: PrismaClient) {
  const schoolAdmin = await prisma.softwareAdim.count();

  if (schoolAdmin == 0) {
    await prisma.softwareAdim.create({
      data: {
        softWareAdimName: "School tab Admin",
        email: "schooltabAdmin@gmail.com",
      },
    });
  }
}
