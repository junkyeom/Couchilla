-- CreateTable
CREATE TABLE "Card" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT,
    "artist" TEXT,
    "type" TEXT,
    "genre" TEXT,
    "condition" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image_url" TEXT,
    "release_date" DATE,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
