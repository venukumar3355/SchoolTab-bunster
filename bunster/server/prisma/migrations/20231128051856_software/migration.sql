/*
  Warnings:

  - You are about to drop the column `createdBy` on the `SoftwareAdim` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SoftwareAdim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "softWareAdimName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "deleatedAt" DATETIME
);
INSERT INTO "new_SoftwareAdim" ("createdAt", "deleatedAt", "email", "id", "isActive", "softWareAdimName", "updateAt") SELECT "createdAt", "deleatedAt", "email", "id", "isActive", "softWareAdimName", "updateAt" FROM "SoftwareAdim";
DROP TABLE "SoftwareAdim";
ALTER TABLE "new_SoftwareAdim" RENAME TO "SoftwareAdim";
CREATE UNIQUE INDEX "SoftwareAdim_email_key" ON "SoftwareAdim"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
