import { Benefits } from '@/src/components/ProtectBag/Benefits'
import { Courses } from '@/src/components/ProtectBag/Courses'
import { Hero } from '@/src/components/ProtectBag/Hero'
import { History } from '@/src/components/ProtectBag/History'
import { ShoppingProtectBag } from '@/src/components/ProtectBag/Shopping'
import { Layout } from '../src/container/Layout'

export default function Home() {
  return (
    <Layout >
      <Hero />
      <History />
      <Benefits />
      <Courses />
      {/* <ShoppingProtectBag /> */}
    </Layout>
  )
}
