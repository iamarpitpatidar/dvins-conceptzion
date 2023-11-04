import { HTMLAttributes } from 'react'

export default function Template({
  children,
  ...attrs
}: HTMLAttributes<HTMLElement> & { children: string }) {
  return <template {...attrs} dangerouslySetInnerHTML={{ __html: children }} />
}
