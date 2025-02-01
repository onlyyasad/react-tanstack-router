import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/"!
      <Button>Click Me!</Button>
    </div>
  )
}
