/*
  Warnings:

  - You are about to drop the column `createdBy` on the `SchoolAdmin` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "SoftwareAdim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "softWareAdimName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdBy" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "deleatedAt" DATETIME
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchoolAdmin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "schoolName" TEXT NOT NULL,
    "schoolEmail" TEXT NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "createdById" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "deleatedAt" DATETIME,
    CONSTRAINT "SchoolAdmin_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SchoolAdmin_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "SoftwareAdim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SchoolAdmin" ("createdAt", "deleatedAt", "id", "isActive", "schoolEmail", "schoolId", "schoolName", "updateAt") SELECT "createdAt", "deleatedAt", "id", "isActive", "schoolEmail", "schoolId", "schoolName", "updateAt" FROM "SchoolAdmin";
DROP TABLE "SchoolAdmin";
ALTER TABLE "new_SchoolAdmin" RENAME TO "SchoolAdmin";
CREATE UNIQUE INDEX "SchoolAdmin_schoolEmail_key" ON "SchoolAdmin"("schoolEmail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "SoftwareAdim_email_key" ON "SoftwareAdim"("email");
