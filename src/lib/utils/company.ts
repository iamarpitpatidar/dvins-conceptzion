import { cache } from 'react'
import db from '@lib/prisma'

export const getCompanyMeta = cache(async () => {
  const settings = await db.settings.findMany({
    where: {
      key: {
        in: ['company_name', 'contact_email'],
      },
    },
    select: {
      key: true,
      value: true,
    },
  })

  return settings.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.value }),
    {},
  )
})
