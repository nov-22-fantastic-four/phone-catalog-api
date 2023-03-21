-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "namespaceId" TEXT NOT NULL,
    "capacityAvailable" TEXT[],
    "capacity" TEXT NOT NULL,
    "colorsAvailable" TEXT[],
    "priceRegular" INTEGER NOT NULL,
    "priceDiscount" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "images" TEXT[],
    "screen" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "camera" TEXT NOT NULL,
    "zoom" TEXT NOT NULL,
    "cell" TEXT[],

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Description" (
    "id" SERIAL NOT NULL,
    "phoneId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT[],

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullPrice" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "screen" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Phone_productId_key" ON "Phone"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_itemId_key" ON "Product"("itemId");

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
