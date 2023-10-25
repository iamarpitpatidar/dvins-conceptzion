import { PrismaClient } from '@prisma/client'

export default async function seedSettings(prisma: PrismaClient) {
  const settings: { key: string; value: string }[] = [
    {
      key: 'contact_email',
      value: 'enquiry@dvinsconceptzion.com',
    },
  ]

  for (const data of settings) {
    await prisma.settings.create({ data })
  }
}
