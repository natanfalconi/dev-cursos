import { BenefitsProtectBag } from '@/src/components/ProtectBag/Benefits'
import { FeedbackProtectBag } from '@/src/components/ProtectBag/Feedbacks'
import { ProtectBag } from '@/src/components/ProtectBag/Hero'
import { HistoryProtectBag } from '@/src/components/ProtectBag/History'
import { ShoppingProtectBag } from '@/src/components/ProtectBag/Shopping'
import { Layout } from '../src/container/Layout'

export default function Home() {
  return (
    <Layout >
      <ProtectBag />
      <HistoryProtectBag />
      <BenefitsProtectBag />
      {/* <FeedbackProtectBag />
      <ShoppingProtectBag /> */}
    </Layout>
  )
}
