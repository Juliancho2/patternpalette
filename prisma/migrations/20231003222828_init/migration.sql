-- CreateTable
CREATE TABLE "Pattern" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "backgroundPosition" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "backgroundSize" TEXT NOT NULL,
    "opacity" INTEGER NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "Pattern_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pattern_name_key" ON "Pattern"("name");
