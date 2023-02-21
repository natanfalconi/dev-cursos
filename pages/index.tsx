import { Benefits } from '@/src/components/Sections/Benefits'
import { Courses } from '@/src/components/Sections/Courses'
import { Hero } from '@/src/components/Sections/Hero'
import { History } from '@/src/components/Sections/History'
// import { ShoppingSections } from '@/src/components/Sections/Shopping'
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
