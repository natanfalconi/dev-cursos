import MetaTags from '@/src/components/MetaTags'
import { Benefits } from '@/src/components/Sections/Benefits'
import { Courses } from '@/src/components/Sections/Courses'
import { Faq } from '@/src/components/Sections/Faq'
import { Hero } from '@/src/components/Sections/Hero'
import { History } from '@/src/components/Sections/History'
// import { ShoppingSections } from '@/src/components/Sections/Shopping'
import { Layout } from '../src/container/Layout'

export default function Home() {
  return (
    <Layout >
      <MetaTags />
      <Hero />
      <History />
      <Benefits />
      <Courses />
      <Faq />
      {/* <ShoppingProtectBag /> */}
    </Layout>
  )
}
