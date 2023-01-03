import Home from '../components/pages/Home'
import Layout from '../components/common/layout'

export default function Index () {
  return (
    <Layout
      title={`Perfect NextJS boiler plate with tailwind CSS and Redux`}
      description="Kick start your development and hosting with this boiler plate just made for you."
    >
      <Home />
    </Layout>
  )
}
