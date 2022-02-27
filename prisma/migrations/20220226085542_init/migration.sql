-- CreateTable
CREATE TABLE "Modpack" (
    "id" SERIAL NOT NULL,
    "modpackId" INTEGER NOT NULL,
    "modCount" INTEGER NOT NULL,

    CONSTRAINT "Modpack_pkey" PRIMARY KEY ("id")
);
