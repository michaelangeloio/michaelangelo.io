import { getViewsForRoute } from 'lib/metrics'
import { allBlogsSorted } from 'lib/utils'
import Link from 'next/link'
import { Suspense } from 'react'
import ViewCounter from './blog/view-counter'
import { FadeIn, FadeUp, PopIn } from './components/Animations'
import { Article } from './components/Article'
import { Header } from './components/Avatar'
import { Badge } from './components/Badge'
import { Photos } from './components/Photos'
import { Resume } from './components/Resume'
import { GitHubIcon, InstagramIcon, LinkedInIcon, SocialLink, TwitterIcon } from './components/Social'

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

async function BlogLink({
  slug,
  name,
  date,
  description,
}: {
  slug: string
  name: string
  date: string
  description: string
}) {
  const views = await getViewsForRoute(`/blog/${slug}`)

  return (
    <Article
      article={{
        views: views,
        date: date,
        description: description,
        slug: slug,
        title: name,
      }}
    ></Article>
  )
}

export default async function Page() {
  const RootPageViews = async () => {
    const viewsForRootPage = await getViewsForRoute('/')
    return <ViewCounter count={viewsForRootPage} route={'/'} trackView />
  }
  return (
    <>
      <section>
        <PopIn delay={0.1}>
          <div className="flex flex-col lg:flex-row lg:p-3 lg:-mt-10">
            <Header></Header>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter mt-4 lg:ml-5">👋 heyo, I&apos;m Michael Angelo</h1>
          </div>
        </PopIn>
        <div className="flex justify-between items-center  mb-8">
          <FadeIn delay={1}>
            <p className="font-bold text-xl tracking-tighter">yes, like the ninja turtle</p>
          </FadeIn>
          <Suspense fallback={<div />}>
            <RootPageViews />
          </Suspense>
        </div>
        <FadeUp>
          <p className="prose prose-neutral dark:prose-invert">
            You can call me Angelo for short! I&apos;m a technology advocate at heart, coffee enthusiast, and pizza
            lover. I&apos;m currently a remote SWE at{' '}
            <Link className="font-bold" href="https://xealth.io">
              {' '}
              Xealth
            </Link>{' '}
            , a digital health startup in Seattle, WA.
            <span className="not-prose"></span>
            {' I love all things '}
            <Badge href="https://nextjs.org">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex mr-1"
              >
                <path
                  d="M5.13979 0.00296175C5.11613 0.00511197 5.04086 0.0126378 4.97312 0.0180134C3.41075 0.158853 1.94731 1.00174 1.02043 2.29725C0.504301 3.01757 0.174194 3.83466 0.0494624 4.70012C0.00537635 5.00223 0 5.09146 0 5.50108C0 5.91069 0.00537635 5.99993 0.0494624 6.30204C0.348387 8.36732 1.81828 10.1026 3.81183 10.7455C4.16882 10.8605 4.54516 10.939 4.97312 10.9863C5.13978 11.0046 5.86022 11.0046 6.02688 10.9863C6.76559 10.9046 7.3914 10.7218 8.0086 10.4068C8.10323 10.3584 8.12151 10.3455 8.1086 10.3348C8.1 10.3283 7.69677 9.78754 7.2129 9.13388L6.33333 7.94588L5.23118 6.31494C4.62473 5.41829 4.12581 4.68507 4.12151 4.68507C4.1172 4.68399 4.1129 5.40862 4.11075 6.29343C4.10753 7.84267 4.10645 7.90503 4.0871 7.94158C4.05914 7.99426 4.03763 8.01576 3.99247 8.03941C3.95806 8.05662 3.92796 8.05984 3.76559 8.05984H3.57957L3.53011 8.02866C3.49785 8.00824 3.47419 7.98136 3.45806 7.95018L3.43548 7.9018L3.43763 5.7462L3.44086 3.58953L3.47419 3.5476C3.4914 3.52502 3.52796 3.496 3.55376 3.48202C3.59785 3.46052 3.61505 3.45837 3.80108 3.45837C4.02043 3.45837 4.05699 3.46697 4.11398 3.52932C4.13011 3.54653 4.72688 4.44532 5.44086 5.52796C6.15484 6.61059 7.13118 8.08887 7.61075 8.81457L8.48172 10.1337L8.52581 10.1047C8.91613 9.85098 9.32903 9.48974 9.65591 9.11345C10.3516 8.31464 10.8 7.34059 10.9505 6.30204C10.9946 5.99993 11 5.91069 11 5.50108C11 5.09146 10.9946 5.00223 10.9505 4.70012C10.6516 2.63483 9.18172 0.899604 7.18817 0.256688C6.83656 0.142726 6.46237 0.0642427 6.04301 0.0169378C5.93978 0.00618668 5.22903 -0.00563913 5.13979 0.00296175ZM7.3914 3.32935C7.44301 3.35516 7.48495 3.40461 7.5 3.45622C7.5086 3.48417 7.51075 4.08193 7.5086 5.42905L7.50538 7.36209L7.16452 6.83959L6.82258 6.31709V4.91192C6.82258 4.00345 6.82688 3.49277 6.83333 3.46804C6.85054 3.40784 6.88817 3.36053 6.93979 3.33258C6.98387 3.31 7 3.30785 7.16882 3.30785C7.32796 3.30785 7.35591 3.31 7.3914 3.32935Z"
                  fill="currentColor"
                />
              </svg>
              Next.js
            </Badge>
            {', '}
            <Badge href="https://react.dev">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex mr-1"
              >
                <path
                  d="M12.3029 5.50126C12.3029 4.68299 11.2822 3.90753 9.71741 3.42664C10.0785 1.82536 9.91803 0.551385 9.21085 0.143511C9.04785 0.047837 8.85726 0.0025177 8.64912 0.0025177V0.563973C8.76447 0.563973 8.85726 0.586633 8.935 0.629435C9.27605 0.825818 9.42401 1.57359 9.30865 2.53536C9.28107 2.77203 9.23593 3.02129 9.18076 3.27558C8.68924 3.15473 8.15259 3.06157 7.58836 3.00114C7.24981 2.53536 6.89873 2.11238 6.54515 1.74227C7.36266 0.9794 8.13002 0.561456 8.65163 0.561456V0C7.96201 0 7.05923 0.493477 6.14642 1.34951C5.23361 0.498512 4.33083 0.010071 3.64121 0.010071V0.571527C4.16031 0.571527 4.93017 0.986953 5.74769 1.74479C5.39661 2.1149 5.04553 2.53536 4.712 3.00114C4.14526 3.06157 3.60861 3.15473 3.11709 3.2781C3.05942 3.02632 3.01679 2.7821 2.98669 2.54795C2.86883 1.58618 3.01428 0.838407 3.35282 0.639506C3.42805 0.594186 3.52585 0.574044 3.64121 0.574044V0.0125887C3.43056 0.0125887 3.23997 0.0579079 3.07446 0.153582C2.36979 0.561456 2.21181 1.83291 2.57543 3.42916C1.01563 3.91257 0 4.68551 0 5.50126C0 6.31952 1.02064 7.09499 2.58546 7.57587C2.22435 9.17716 2.38484 10.4511 3.09202 10.859C3.25502 10.9547 3.44561 11 3.65625 11C4.34588 11 5.24865 10.5065 6.16146 9.65049C7.07427 10.5015 7.97705 10.9899 8.66667 10.9899C8.87732 10.9899 9.06791 10.9446 9.23342 10.8489C9.93809 10.4411 10.0961 9.1696 9.73245 7.57336C11.2872 7.09247 12.3029 6.31701 12.3029 5.50126ZM9.03782 3.82193C8.94503 4.14672 8.82968 4.48157 8.69927 4.81643C8.59646 4.61501 8.48863 4.4136 8.37076 4.21218C8.25541 4.01076 8.13253 3.81437 8.00965 3.62303C8.36575 3.6759 8.70931 3.74136 9.03782 3.82193ZM7.88928 6.50332C7.69368 6.84321 7.49306 7.16548 7.28492 7.46509C6.91127 7.49782 6.53261 7.51545 6.15143 7.51545C5.77277 7.51545 5.3941 7.49783 5.02296 7.46761C4.81482 7.168 4.61169 6.84825 4.41609 6.51087C4.22551 6.18105 4.05247 5.84619 3.89449 5.50881C4.04997 5.17143 4.22551 4.83406 4.41358 4.50423C4.60919 4.16434 4.8098 3.84207 5.01794 3.54246C5.39159 3.50973 5.77026 3.4921 6.15143 3.4921C6.5301 3.4921 6.90876 3.50973 7.27991 3.53994C7.48805 3.83955 7.69117 4.1593 7.88677 4.49668C8.07736 4.8265 8.25039 5.16136 8.40838 5.49874C8.25039 5.83612 8.07736 6.17349 7.88928 6.50332ZM8.69927 6.17601C8.83469 6.51339 8.95005 6.85077 9.04534 7.17807C8.71683 7.25864 8.37076 7.32662 8.01216 7.37949C8.13504 7.18563 8.25792 6.98672 8.37327 6.78279C8.48863 6.58137 8.59646 6.37743 8.69927 6.17601ZM6.15645 8.86244C5.92323 8.62074 5.69001 8.35134 5.4593 8.05676C5.685 8.06683 5.91571 8.07439 6.14893 8.07439C6.38465 8.07439 6.61787 8.06935 6.84607 8.05676C6.62038 8.35134 6.38716 8.62074 6.15645 8.86244ZM4.29071 7.37949C3.93461 7.32662 3.59105 7.26116 3.26254 7.18059C3.35533 6.8558 3.47068 6.52094 3.60108 6.18608C3.7039 6.3875 3.81173 6.58892 3.92959 6.79034C4.04746 6.99176 4.16783 7.18814 4.29071 7.37949ZM6.14391 2.14008C6.37713 2.38178 6.61035 2.65118 6.84106 2.94575C6.61536 2.93568 6.38465 2.92813 6.15143 2.92813C5.91571 2.92813 5.68249 2.93317 5.45429 2.94575C5.67998 2.65118 5.9132 2.38178 6.14391 2.14008ZM4.2882 3.62303C4.16532 3.81689 4.04244 4.01579 3.92709 4.21973C3.81173 4.42115 3.7039 4.62257 3.60108 4.82399C3.46567 4.48661 3.35031 4.14923 3.25502 3.82193C3.58353 3.74388 3.9296 3.6759 4.2882 3.62303ZM2.01871 6.77523C1.13098 6.39506 0.556713 5.89654 0.556713 5.50126C0.556713 5.10597 1.13098 4.60494 2.01871 4.22728C2.23438 4.13413 2.4701 4.05104 2.71335 3.97299C2.85629 4.46647 3.04437 4.98009 3.27759 5.50629C3.04688 6.02998 2.86131 6.54108 2.72088 7.03204C2.47261 6.95399 2.23689 6.86839 2.01871 6.77523ZM3.36787 10.3731C3.02682 10.1767 2.87886 9.42893 2.99422 8.46715C3.0218 8.23049 3.06694 7.98123 3.12211 7.72694C3.61362 7.84779 4.15027 7.94095 4.71451 8.00137C5.05305 8.46715 5.40413 8.89013 5.75772 9.26024C4.94021 10.0231 4.17284 10.4411 3.65124 10.4411C3.53839 10.4385 3.4431 10.4159 3.36787 10.3731ZM9.31617 8.45457C9.43404 9.41634 9.28859 10.1641 8.95005 10.363C8.87481 10.4083 8.77701 10.4285 8.66166 10.4285C8.14256 10.4285 7.37269 10.013 6.55518 9.25521C6.90626 8.8851 7.25734 8.46464 7.59086 7.99886C8.15761 7.93843 8.69426 7.84527 9.18577 7.7219C9.24345 7.9762 9.28859 8.22042 9.31617 8.45457ZM10.2816 6.77523C10.066 6.86839 9.83026 6.95148 9.58701 7.02953C9.44407 6.53605 9.25599 6.02243 9.02277 5.49622C9.25348 4.97253 9.43905 4.46143 9.57948 3.97047C9.82775 4.04852 10.0635 4.13413 10.2842 4.22728C11.1719 4.60746 11.7462 5.10597 11.7462 5.50126C11.7436 5.89654 11.1694 6.39757 10.2816 6.77523Z"
                  fill="#61DAFB"
                />
                <path
                  d="M6.13697 6.65389C6.77191 6.65389 7.28663 6.13725 7.28663 5.49994C7.28663 4.86263 6.77191 4.34599 6.13697 4.34599C5.50203 4.34599 4.9873 4.86263 4.9873 5.49994C4.9873 6.13725 5.50203 6.65389 6.13697 6.65389Z"
                  fill="#61DAFB"
                />
              </svg>
              React
            </Badge>
            {', '}
            <Badge href="https://nodejs.org">
              <svg
                width="14"
                height="12"
                viewBox="0 0 256 282"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                className="inline-flex mr-1"
              >
                <g fill="#8CC84B">
                  <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                  <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                </g>
              </svg>
              Nodejs
            </Badge>
            {', '}
            <Badge href="https://kubernetes.io/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="14"
                height="12"
                className="inline-flex mr-1"
              >
                <path
                  d="M15.9.476a2.14 2.14 0 0 0-.823.218L3.932 6.01c-.582.277-1.005.804-1.15 1.432L.054 19.373c-.13.56-.025 1.147.3 1.627q.057.087.12.168l7.7 9.574c.407.5 1.018.787 1.662.784h12.35c.646.001 1.258-.3 1.664-.793l7.696-9.576c.404-.5.555-1.16.4-1.786L29.2 7.43c-.145-.628-.57-1.155-1.15-1.432L16.923.695A2.14 2.14 0 0 0 15.89.476z"
                  fill="#326ce5"
                />
                <path
                  d="M16.002 4.542c-.384.027-.675.356-.655.74v.188c.018.213.05.424.092.633a6.22 6.22 0 0 1 .066 1.21c-.038.133-.114.253-.218.345l-.015.282c-.405.034-.807.096-1.203.186-1.666.376-3.183 1.24-4.354 2.485l-.24-.17c-.132.04-.274.025-.395-.04a6.22 6.22 0 0 1-.897-.81 5.55 5.55 0 0 0-.437-.465l-.148-.118c-.132-.106-.294-.167-.463-.175a.64.64 0 0 0-.531.236c-.226.317-.152.756.164.983l.138.11a5.55 5.55 0 0 0 .552.323c.354.197.688.428.998.7a.74.74 0 0 1 .133.384l.218.2c-1.177 1.766-1.66 3.905-1.358 6.006l-.28.08c-.073.116-.17.215-.286.288a6.22 6.22 0 0 1-1.194.197 5.57 5.57 0 0 0-.64.05l-.177.04h-.02a.67.67 0 0 0-.387 1.132.67.67 0 0 0 .684.165h.013l.18-.02c.203-.06.403-.134.598-.218.375-.15.764-.265 1.162-.34.138.008.27.055.382.135l.3-.05c.65 2.017 2.016 3.726 3.84 4.803l-.122.255c.056.117.077.247.06.376-.165.382-.367.748-.603 1.092a5.58 5.58 0 0 0-.358.533l-.085.18a.67.67 0 0 0 .65 1.001.67.67 0 0 0 .553-.432l.083-.17c.076-.2.14-.404.192-.61.177-.437.273-.906.515-1.196a.54.54 0 0 1 .286-.14l.15-.273a8.62 8.62 0 0 0 6.146.015l.133.255c.136.02.258.095.34.205.188.358.34.733.456 1.12a5.57 5.57 0 0 0 .194.611l.083.17a.67.67 0 0 0 1.187.131.67.67 0 0 0 .016-.701l-.087-.18a5.55 5.55 0 0 0-.358-.531c-.23-.332-.428-.686-.6-1.057a.52.52 0 0 1 .068-.4 2.29 2.29 0 0 1-.111-.269c1.82-1.085 3.18-2.8 3.823-4.82l.284.05c.102-.093.236-.142.373-.138.397.076.786.2 1.162.34.195.09.395.166.598.23.048.013.118.024.172.037h.013a.67.67 0 0 0 .841-.851.67.67 0 0 0-.544-.446l-.194-.046a5.57 5.57 0 0 0-.64-.05c-.404-.026-.804-.092-1.194-.197-.12-.067-.22-.167-.288-.288l-.27-.08a8.65 8.65 0 0 0-1.386-5.993l.236-.218c-.01-.137.035-.273.124-.378.307-.264.64-.497.99-.696a5.57 5.57 0 0 0 .552-.323l.146-.118a.67.67 0 0 0-.133-1.202.67.67 0 0 0-.696.161l-.148.118a5.57 5.57 0 0 0-.437.465c-.264.302-.556.577-.873.823a.74.74 0 0 1-.404.044l-.253.18c-1.46-1.53-3.427-2.48-5.535-2.67 0-.1-.013-.25-.015-.297-.113-.078-.192-.197-.218-.332a6.23 6.23 0 0 1 .076-1.207c.043-.21.073-.42.092-.633v-.2c.02-.384-.27-.713-.655-.74zm-.834 5.166l-.2 3.493h-.015c-.01.216-.137.4-.332.504s-.426.073-.6-.054l-2.865-2.03a6.86 6.86 0 0 1 3.303-1.799c.234-.05.47-.088.707-.114zm1.668 0c1.505.187 2.906.863 3.99 1.924l-2.838 2.017c-.175.14-.415.168-.618.072s-.333-.3-.336-.524zm-6.72 3.227l2.62 2.338v.015c.163.142.234.363.186.574s-.21.378-.417.435v.01l-3.362.967a6.86 6.86 0 0 1 .974-4.34zm11.753 0c.796 1.295 1.148 2.814 1.002 4.327l-3.367-.97v-.013c-.21-.057-.37-.224-.417-.435s.023-.43.186-.574l2.6-2.327zm-6.404 2.52h1.072l.655.832-.238 1.04-.963.463-.965-.463-.227-1.04zm3.434 2.838c.045-.005.1-.005.135 0l3.467.585c-.5 1.44-1.487 2.67-2.775 3.493l-1.34-3.244a.59.59 0 0 1 .509-.819zm-5.823.015c.196.003.377.104.484.268s.124.37.047.55v.013l-1.332 3.218C11 21.54 10.032 20.325 9.517 18.9l3.437-.583c.038-.004.077-.004.116 0zm2.904 1.4a.59.59 0 0 1 .537.308h.013l1.694 3.057-.677.2c-1.246.285-2.547.218-3.758-.194l1.7-3.057c.103-.18.293-.29.5-.295z"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth=".055"
                />
              </svg>
              Kubernetes
            </Badge>
            {', '}
            <Badge href="https://aws.amazon.com">
              <svg
                enableBackground="new 0 0 70 70"
                version="1.1"
                viewBox="14.7 23 42 26.2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                className="inline-flex mr-1"
              >
                <polygon points="27.09 35.764 25.984 40.34 28.182 40.34 27.115 35.764" fill="#F7981F" />
                <path
                  d="m16.302 40.744v0.666c0 3.311 3.579 6.66 7.991 6.66h23.533c4.412 0 7.991-3.35 7.991-6.66v-0.666c0-3.078-3.098-6.943-7.081-7.283-0.089-2.752-2.342-4.955-5.113-4.955-1.076 0-2.074 0.334-2.898 0.9-1.58-3.52-5.107-5.977-9.216-5.977-5.579 0-10.101 4.521-10.101 10.102 0 0.1 0.012 0.195 0.015 0.293-2.993 0.867-5.121 4.371-5.121 6.92zm12.699 3.055l-0.572-2.275h-2.717l-0.599 2.275h-1.547l2.639-9.283h1.898l2.444 9.283h-1.546zm9.012 0h-1.716l-1.196-6.994h-0.026l-1.183 6.994h-1.716l-1.795-9.283h1.496l1.221 7.215h0.027l1.221-7.215h1.561l1.248 7.254h0.026l1.209-7.254h1.469l-1.846 9.283zm5.433 0.181c-2.301 0-2.821-1.533-2.821-2.834v-0.221h1.482v0.234c0 1.131 0.494 1.703 1.521 1.703 0.936 0 1.403-0.664 1.403-1.354 0-0.975-0.493-1.404-1.325-1.65l-1.015-0.352c-1.353-0.52-1.937-1.221-1.937-2.547 0-1.691 1.144-2.627 2.886-2.627 2.379 0 2.626 1.482 2.626 2.443v0.209h-1.482v-0.195c0-0.846-0.377-1.34-1.3-1.34-0.637 0-1.248 0.352-1.248 1.34 0 0.793 0.403 1.195 1.392 1.572l1 0.365c1.313 0.467 1.886 1.184 1.886 2.457 1e-3 1.979-1.196 2.797-3.068 2.797z"
                  fill="#F7981F"
                />
                <path
                  d="m26.205 34.516l-2.639 9.283h1.547l0.599-2.275h2.717l0.572 2.275h1.547l-2.444-9.283h-1.899zm-0.221 5.824l1.105-4.576h0.025l1.066 4.576h-2.196z"
                  fill="#fff"
                />
                <polygon
                  points="37.181 41.77 37.154 41.77 35.906 34.516 34.346 34.516 33.125 41.73 33.098 41.73 31.877 34.516 30.381 34.516 32.176 43.799 33.892 43.799 35.074 36.805 35.101 36.805 36.297 43.799 38.013 43.799 39.858 34.516 38.39 34.516"
                  fill="#fff"
                />
                <path
                  d="m44.629 38.729l-1-0.365c-0.988-0.377-1.392-0.779-1.392-1.572 0-0.988 0.611-1.34 1.248-1.34 0.923 0 1.3 0.494 1.3 1.34v0.195h1.482v-0.209c0-0.961-0.247-2.443-2.626-2.443-1.742 0-2.886 0.936-2.886 2.627 0 1.326 0.584 2.027 1.937 2.547l1.015 0.352c0.832 0.246 1.325 0.676 1.325 1.65 0 0.689-0.468 1.354-1.403 1.354-1.027 0-1.521-0.572-1.521-1.703v-0.234h-1.482v0.221c0 1.301 0.521 2.834 2.821 2.834 1.872 0 3.068-0.818 3.068-2.795 0-1.276-0.573-1.993-1.886-2.459z"
                  fill="#fff"
                />
              </svg>
              Cloud
            </Badge>
            {', '}
            <Badge href="https://svelte.dev/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 107 128"
                className="inline-flex mr-1"
              >
                <title>svelte-logo</title>
                <path
                  d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"
                  className="fill-[#ff3e00]"
                />
                <path
                  d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"
                  className="fill-white"
                />
              </svg>
              Svelte
            </Badge>
            {', '}
            <Badge href="https://go.dev/">
              <svg
                height="14"
                preserveAspectRatio="xMidYMid"
                viewBox="-10.858 -38.49690284 271.141 389.92490284"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex mr-1"
              >
                <path
                  d="m3.686 188.165c.498 10.26 10.758 5.479 15.34 2.291 4.383-3.088 5.678-.498 6.076-6.475.299-3.984.697-7.869.498-11.853-6.674-.598-13.846.996-19.325 4.98-2.888 1.992-8.068 8.567-2.59 11.057m204.502 126.107c7.869 4.881 22.313 19.624 10.459 26.796-11.356 10.36-17.73-11.456-27.692-14.444 4.283-5.877 9.662-11.256 17.233-12.352zm-140.85 16.635c-9.264 1.395-14.444 9.762-22.213 14.046-7.272 4.283-10.061-1.395-10.659-2.59-1.095-.498-.996.498-2.789-1.295-6.773-10.659 6.973-18.428 14.145-23.708 9.961-1.992 16.237 6.674 21.516 13.547zm184.579-144.037c-.498 10.26-10.758 5.479-15.34 2.291-4.383-3.088-5.678-.498-6.076-6.475-.3-3.984-.698-7.869-.498-11.853 6.673-.598 13.845.996 19.324 4.98 2.79 1.992 8.069 8.567 2.59 11.057"
                  fill="#f6d2a2"
                />
                <path
                  d="m224.722 61.759c35.561-12.551 7.77-61.26-23.21-39.745-20.32-17.432-48.31-20.62-77.696-20.62-28.786 2.293-56.18 7.572-75.305 24.306-30.881-19.923-59.369 27.89-23.111 39.944-10.16 39.445 1.394 79.688-.2 119.831-1.494 36.06-10.957 84.37 9.065 116.744 17.034 27.692 53.69 37.554 83.873 38.65 38.549 1.394 85.266-8.069 103.993-45.423 17.93-35.561 12.95-79.888 10.659-118.238-2.291-38.749 1.992-78.095-8.069-115.45z"
                  fill="#69d7e2"
                />
                <path d="m254.605 180.794c-.996-2.092-2.888-4.483-4.681-5.778-4.582-3.287-10.46-5.08-16.536-5.279-.199-6.176-.398-12.95-.398-21.516v-7.77c-.1-24.504-.399-35.262-1.793-48.71-1.096-10.558-2.79-20.32-5.18-29.484 8.069-3.088 13.348-8.168 15.44-14.743 1.992-6.076.996-12.949-2.39-19.025-3.487-5.977-9.065-10.46-15.54-12.252-6.973-1.893-14.543-.498-21.815 4.382-6.475-5.478-13.945-9.662-22.313-12.85-14.842-5.477-32.074-7.569-55.483-7.569v.996l-.1-.996c-25.002 1.992-43.53 5.877-58.87 13.348-6.176 2.988-11.654 6.574-16.435 10.758-7.372-4.582-15.042-5.678-22.114-3.486-6.574 1.992-12.252 6.674-15.639 12.75s-4.184 13.049-1.893 19.026c2.291 5.976 7.57 10.658 15.44 13.547-2.49 10.06-3.785 20.719-3.984 32.473-.2 11.455.298 20.62 2.091 41.338 1.295 15.44 1.793 22.512 1.993 31.079-6.774-.299-13.547 1.494-18.628 5.18-1.793 1.295-3.785 3.586-4.681 5.777-1.295 2.79-.797 5.28 1.793 6.774.398 4.781 3.088 6.972 7.172 6.574 2.988-.299 6.574-1.893 9.662-4.084a11.208 11.208 0 0 1 2.092-1.195c.299-.1.498-.2.797-.3 0 0 .597-.198.797-.298.298-.1.597-.2.796-.399-.199 4.682-.597 9.563-1.494 20.72-.996 12.55-1.494 19.424-1.693 27.094-.897 28.488 2.49 49.207 12.65 65.643 3.188 5.18 7.073 9.762 11.655 13.946-.897.597-4.682 3.387-5.877 4.283-4.184 3.188-7.072 5.877-8.766 8.865-2.191 3.885-2.191 7.77.299 11.854l.1.1.1.1c1.095 1.095 1.693 1.394 2.49 1.394h.297c.1.2.2.299.3.498.298.498.597.896.896 1.295 2.49 2.889 5.976 3.586 10.658.797 2.49-1.295 4.283-2.79 8.068-5.977l.2-.2c6.076-5.179 9.064-7.071 13.547-7.769l1.594-.299c.597.3 1.195.499 1.892.797 14.145 5.678 30.58 8.766 47.216 9.364 21.516.797 42.235-1.893 59.766-8.268 4.682-1.693 9.065-3.686 13.249-5.877 2.59.996 4.78 3.088 8.965 7.969.199.2.199.2.298.398.2.2.2.3.3.399.198.299.497.498.696.797 3.288 3.884 5.48 5.777 7.97 6.873 3.286 1.394 6.474.697 9.761-2.291 5.778-3.586 6.176-9.164 2.39-15.54-2.689-4.482-7.37-9.164-11.753-12.152 5.18-5.08 9.662-11.156 13.148-18.03 9.563-19.125 13.249-41.438 13.05-70.126-.1-10.16-.499-19.025-1.594-35.96v-.497c.498.199.996.498 1.494.896 3.088 2.092 6.674 3.785 9.662 4.084 4.084.399 6.774-1.793 7.172-6.574 2.49-1.594 2.988-4.084 1.693-6.873zm-31.675-162.466c5.977 1.594 11.157 5.778 14.344 11.356 3.188 5.578 4.084 11.854 2.291 17.432-1.892 5.877-6.674 10.559-14.145 13.348a162.04 162.04 0 0 0 -5.279-15.739c2.889-2.49 4.283-5.578 1.992-9.96-2.29-4.384-6.275-4.882-10.36-3.587-2.59-3.387-5.478-6.375-8.466-9.164 6.574-4.184 13.348-5.379 19.623-3.686zm-212.37 33.669c-2.092-5.38-1.395-11.754 1.793-17.332 3.187-5.579 8.367-9.961 14.543-11.754 6.375-1.893 13.248-.997 20.022 2.988a65.541 65.541 0 0 0 -10.36 11.854c-5.18-2.69-10.459-3.188-13.447 2.29-3.088 5.878.498 9.563 5.578 12.352-.697 1.694-1.395 3.487-1.992 5.28-.698 2.191-1.395 4.482-1.992 6.773-7.272-2.789-12.053-7.072-14.145-12.451zm12.053 135.77c-.1 0-.698.199-.698.298-.298.1-.597.2-.896.399-.797.299-1.594.797-2.39 1.394-2.79 1.993-6.177 3.487-8.767 3.686-2.988.299-4.681-.996-4.98-4.582 2.092-.697 2.988-1.195 3.785-2.39l-1.594-1.196c-.597.797-1.195 1.096-2.988 1.693-.1 0-.1 0-.2.1-1.593-.897-1.892-2.291-.995-4.283.797-1.793 2.59-3.885 4.084-4.98 4.781-3.487 11.156-5.18 17.531-4.782 0 2.49.1 4.98 0 7.37 0 .3 0 .499-.1.798-.099 1.394-.099 1.992-.199 2.69-.298 2.888-.498 3.286-1.593 3.785zm30.082 150.312-.2.2c-3.685 3.187-5.478 4.482-7.769 5.777-3.785 2.291-6.375 1.793-8.168-.398-.299-.3-.498-.698-.697-.997-.1-.1-.2-.298-.299-.398v-.1c.2-1.793.897-3.088 2.69-5.877.1-.1.1-.1.1-.199 1.095-1.594 1.593-2.49 2.091-3.586l-1.793-.797c-.398.897-.896 1.694-1.893 3.287-.1.1-.1.1-.1.2-1.792 2.59-2.59 4.183-2.988 5.976h-.1-.299c-.2-.1-.498-.299-.896-.697-3.885-6.176-.797-11.455 7.968-18.03 1.096-.796 4.782-3.386 5.778-4.183.2 0 .398-.1.598-.2 5.378 4.583 11.654 8.567 18.627 11.854 0 .1.1.2.199.3-4.084.995-7.272 3.087-12.85 7.868zm167.247-10.857c3.088 5.18 2.988 9.363-.897 12.252-.298-.598-.498-1.295-.896-2.291 0-.1 0-.1-.1-.2-1.394-3.785-2.29-5.378-3.984-7.171l-1.395 1.394c1.494 1.395 2.192 2.889 3.586 6.375 0 .1 0 .1.1.2.498 1.294.797 2.091 1.096 2.789-2.59 2.191-4.881 2.59-7.272 1.494-2.092-.897-4.084-2.79-7.272-6.375-.199-.2-.398-.498-.597-.797-.1-.1-.2-.2-.3-.399-.198-.199-.198-.199-.298-.398-3.686-4.283-5.877-6.574-8.268-7.87 5.579-3.187 10.56-6.773 15.042-10.957 4.183 3.088 8.865 7.67 11.455 11.954zm1.394-32.274c-8.566 17.233-23.707 29.385-44.028 36.756-17.332 6.276-37.852 8.866-59.069 8.069-36.557-1.295-68.233-14.045-83.075-38.151-9.961-16.038-13.249-36.458-12.352-64.548.299-7.67.697-14.543 1.693-27.094 1.096-14.145 1.395-18.229 1.694-24.604.199-4.582.199-9.264.1-14.244-.2-8.766-.698-15.739-1.993-31.378-1.793-20.719-2.291-29.784-2.092-41.14.3-14.94 2.291-28.09 6.475-40.54 6.771-20.223 19.224-33.87 37.154-42.734 15.041-7.37 33.27-11.156 58.073-13.149 23.21 0 40.143 2.092 54.786 7.471 17.531 6.475 30.58 17.83 39.545 35.263 5.778 14.144 9.165 29.385 10.958 46.916 1.394 13.348 1.693 24.106 1.793 48.51v7.77c.1 12.053.298 20.52.797 28.987.199 3.287.298 4.682.796 12.551 1.096 16.934 1.495 25.7 1.594 35.86.2 28.588-3.387 50.602-12.85 69.429zm30.481-109.074c-.1 0-.199-.1-.298-.1-1.793-.597-2.391-.996-2.989-1.693l-1.594 1.195c.897 1.196 1.793 1.694 3.786 2.39-.399 3.587-2.092 4.882-4.98 4.583-2.59-.2-5.978-1.793-8.767-3.686-.797-.597-1.593-.996-2.39-1.394-.1 0-.2-.1-.3-.1-.398-5.478-.398-6.873-.597-9.762l-.299-5.379c5.579.1 11.057 1.793 15.24 4.881 1.495 1.096 3.288 3.188 4.085 4.98.996 1.694.797 3.188-.897 4.085z" />
                <path
                  d="m138.918 104.123c.1 5.08 1.096 10.658.199 16.037-1.395 2.59-3.984 2.89-6.275 3.885-3.188-.498-5.878-2.59-7.172-5.578-.797-6.076.199-11.854.498-17.93 0-.2 3.785.1 7.172 1.096 2.888.896 5.578 2.39 5.578 2.49zm-28.19.398c-2.79 10.56 3.686 27.792 14.344 13.647-.797-5.977.1-11.754.398-17.631.1-.498-14.642 3.287-14.742 3.984z"
                  fill="#fff"
                />
                <path d="m140.113 108.805c-.2-2.989-.299-4.184-.299-5.678v-.697l-.697-.2-12.551-3.884v-.698l-1.295.3h-.1v.099l-14.144 3.586-.498.1-.2.497c-2.191 5.28-1.693 13.249 1.096 18.13 3.188 5.578 8.367 5.677 13.647-.698a10.192 10.192 0 0 0 7.47 5.38h.3l.298-.1c.399-.2.797-.3 1.495-.598.1 0 .1 0 .199-.1 2.888-.996 4.084-1.793 5.08-3.685l.1-.1v-.199c.298-1.793.398-3.686.398-5.777 0-1.495-.1-2.89-.299-5.678zm-15.938-3.686c-.1 1.793-.199 2.49-.298 3.486-.2 3.686-.2 6.475.1 9.264-4.683 5.977-8.368 5.977-10.858 1.494-2.391-4.183-2.89-11.256-1.096-15.937l12.55-3.188c-.099 1.295-.198 2.59-.398 4.881zm13.946 14.743c-.697 1.195-1.594 1.793-3.985 2.59-.1 0-.1 0-.199.099-.597.2-.996.398-1.295.498-2.69-.498-4.98-2.291-6.076-4.781-.299-2.69-.299-5.479-.1-9.164.1-.997.1-1.694.3-3.487.198-2.29.298-3.685.298-4.98l10.858 3.287c0 1.295.1 2.49.299 5.08.199 2.69.298 4.084.298 5.678 0 1.892-.1 3.586-.398 5.18z" />
                <g transform="translate(48.476 21.976)">
                  <path
                    d="m2.291 38.749c9.164 35.66 66.241 26.496 64.05-9.264-2.591-42.833-72.816-34.565-64.051 9.264"
                    fill="#fff"
                  />
                  <path d="m67.337 29.385c-.598-10.36-5.18-18.428-12.75-23.508-6.774-4.582-15.739-6.375-24.604-5.28-8.865 1.197-17.034 5.181-22.413 11.457-5.976 6.972-8.267 16.136-6.175 26.695l.896-.2-.896.2c9.363 36.656 68.133 27.791 65.942-9.364zm-64.15 9.165c-1.992-10.06.2-18.627 5.778-25.102 5.08-5.877 12.75-9.761 21.217-10.857s16.934.598 23.31 4.98c7.071 4.782 11.355 12.253 11.952 22.114 2.092 34.764-53.391 43.132-62.256 8.865z" />
                  <ellipse cx="18.03" cy="32.872" rx="9.662" ry="10.459" />
                  <ellipse cx="22.412" cy="35.262" fill="#fff" rx="2.291" ry="2.689" />
                </g>
                <g transform="translate(129.618 18.098)">
                  <path
                    d="m1.195 35.96c7.073 40.94 74.011 30.082 64.349-11.157-8.666-37.055-66.74-26.795-64.349 11.157"
                    fill="#fff"
                  />
                  <path d="m66.44 24.604c-8.865-38.151-68.63-27.692-66.24 11.455v.1c3.286 19.324 20.52 29.186 39.545 25.998 8.665-1.494 16.435-5.677 21.515-11.853 5.578-6.874 7.57-15.739 5.18-25.7zm-6.673 24.504c-4.782 5.778-12.053 9.762-20.321 11.157-18.03 2.988-34.167-6.276-37.354-24.405-2.192-36.856 54.188-46.718 62.555-10.858 2.192 9.463.399 17.731-4.88 24.106z" />
                  <ellipse cx="17.631" cy="34.167" rx="9.463" ry="10.459" />
                  <ellipse cx="22.014" cy="36.557" fill="#fff" rx="2.191" ry="2.689" />
                </g>
                <path
                  d="m112.785 83.002c-7.87.697-14.245 9.961-10.16 17.332 5.378 9.762 17.431-.896 24.902.1 8.666.2 15.739 9.164 22.612 1.594 7.67-8.368-3.287-16.536-11.954-20.122z"
                  fill="#f6d2a2"
                />
                <path
                  d="m151.135 89.676c-2.69-3.387-7.371-6.475-12.452-8.567l-.199-.1h-.199l-25.5.997c-8.866.797-15.24 11.057-10.958 18.826 1.694 2.989 3.985 4.483 7.073 4.682 2.29.1 4.682-.398 8.367-1.693.299-.1.697-.2 1.195-.399 4.981-1.693 6.973-2.191 8.965-1.892h.1c2.39 0 4.383.697 8.168 2.191 4.184 1.693 5.479 2.192 7.57 2.39 2.89.2 5.38-.796 7.67-3.286 3.885-4.284 3.686-8.866.2-13.149zm-1.694 11.754c-1.892 2.092-3.785 2.79-6.076 2.69-1.793-.1-2.988-.598-6.973-2.192-3.984-1.693-6.175-2.29-8.765-2.39-2.49-.3-4.582.199-9.862 1.992-.498.199-.896.299-1.195.398-7.272 2.49-10.758 2.291-13.149-2.092-3.586-6.474 1.893-15.24 9.364-15.937l25.201-.997c4.782 1.993 9.065 4.881 11.555 7.97 2.988 3.585 3.088 7.171-.1 10.558z"
                  fill="#231f20"
                />
                <path d="m140.178 78.719c-3.088-11.356-28.987-9.662-28.39 3.885 1.295 10.06 31.378 7.37 28.39-3.885z" />
              </svg>
              Go
            </Badge>{' '}
            and more. Feel free to check out{' '}
            <Link className="font-bold" href="/blog">
              {' '}
              my blog
            </Link>{' '}
            and{' '}
            <Link className="font-bold" href="/open-source">
              projects
            </Link>{' '}
            to see what I&apos;ve been up to.
          </p>
        </FadeUp>
        <div className="mt-6 flex gap-6">
          <SocialLink href="https://twitter.com/michaelangeloi0" aria-label="Follow on Twitter" icon={TwitterIcon} />
          <SocialLink
            href="https://instagram.com/michaelangelo.io"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink href="https://github.com/michaelangeloio" aria-label="Follow on GitHub" icon={GitHubIcon} />
          <SocialLink
            href="https://www.linkedin.com/in/michaelangeloio/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
        <Photos />
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Other than tech, I love to seek adventure. I&apos;m an avid runner, cyclist, and drummer{' '}
            {'(my girlfriend definitely enjoys it, I promise)'}.
          </p>
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I use this site to share my experiences, dumb mistakes, learnings, and maybe some memes. I hope you enjoy!
          </p>
        </div>
        <div className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 w-3/4" />
        <h3>Recent Articles</h3>
        <div className="my-8 flex flex-col space-y-4 w-full">
          <Suspense>
            {allBlogsSorted()
              .slice(-3)
              .map((blog, i) => (
                //@ts-ignore
                <BlogLink
                  name={blog.title}
                  slug={blog.slug}
                  date={blog.publishedAt}
                  description={blog.summary}
                  key={i}
                />
              ))}
          </Suspense>
        </div>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="/open-source"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">my projects</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://michaelangeloio.substack.com/"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">my substack</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://michaelangeloio.medium.com/"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">my medium</p>
            </a>
          </li>
        </ul>
        <div className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 w-3/4" />

        <div className="prose prose-neutral dark:prose-invert">
          <p>If you need more professional info, download below!</p>
        </div>
      </section>
      <Resume />
      <div className="text-xs text-center mt-10">
        <div>Copyright © 2023 Michael Angelo Rivera</div>
        <div>
          {' '}
          Thank you{' '}
          <Link href={'https://leerob.io/'} className="font-bold">
            Lee Rob
          </Link>{' '}
          for the inspiration!
        </div>
      </div>
    </>
  )
}
