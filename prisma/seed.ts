import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function seed() {
  const seedFilesPath = path.join(__dirname, 'seeders')

  const seedFiles = fs
    .readdirSync(seedFilesPath)
    .filter((file: string) => file.endsWith('.seed.ts'))

  for (const seedFile of seedFiles) {
    const seedFilePath = path.join(seedFilesPath, seedFile)
    const { default: seedFunction } = require(seedFilePath)
    await seedFunction(prisma)
  }

  console.log('Seeding completed successfully')
}

seed()
  .catch((error) => {
    console.error('Seeding error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
