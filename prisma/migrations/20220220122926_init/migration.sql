-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "date_of_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "okey" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "number_of_pages" INTEGER NOT NULL,
    "number_of_chapters" INTEGER NOT NULL,
    "number_of_published_books" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_url_key" ON "Book"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Book_okey_key" ON "Book"("okey");
