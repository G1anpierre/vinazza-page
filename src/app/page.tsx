import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const dancePrograms = [
  ['Marinera Norteña', logoPhobiaLight],
  ['Marinera Limeña', logoFamilyFund],
  ['Festejo', logoUnseal],
  ['Huayno', logoMailSmirk],
  ['Salsa', logoHomeWork],
  ['Bachata', logoGreenLife],
  ['Cumbia', logoBrightPath],
  ['Folklore', logoNorthAdventures],
]

function DancePrograms() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Discover our diverse dance programs
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {dancePrograms.map(([program]) => (
              <li key={program}>
                <FadeIn>
                  <div className="rounded-2xl border border-neutral-800 p-4 hover:border-neutral-600 transition-colors">
                    <span className="font-display text-lg font-semibold text-white block text-center">
                      {program}
                    </span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Celebrating Culture Through Dance"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Join us in preserving and celebrating the rich traditions of Peruvian and Latin American dance, where every step tells a story and every movement carries centuries of culture.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <span className="font-display text-base font-semibold text-neutral-950">
                      {caseStudy.client}
                    </span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{caseStudy.service}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Classes"
        title="Experience the rich culture of Latin American dance"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From traditional Peruvian dances to modern Latin rhythms, we offer a journey through the most beautiful expressions of Latin American culture.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Marinera">
              Our flagship program featuring Peru&apos;s most elegant couple dance. Learn both Marinera Norteña and Limeña styles from certified instructors.
            </ListItem>
            <ListItem title="Peruvian Folklore">
              Explore the rich diversity of Peruvian dance, including Festejo, Huayno, and other traditional dances that tell the story of Peru&apos;s cultural heritage.
            </ListItem>
            <ListItem title="Latin Dance">
              Master the rhythm and passion of Salsa and Bachata with our experienced instructors. Perfect for beginners and advanced dancers alike.
            </ListItem>
            <ListItem title="Special Programs">
              Join our workshops, cultural events, and performances throughout the year. Experience the joy of dance while connecting with our vibrant community.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Vinazza - El Arte de Bailar: Premier Latin American dance school specializing in Peruvian dances and Latin rhythms.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Vinazza - El Arte de Bailar
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Experience the authentic spirit of Peruvian and Latin American dance. From the elegant Marinera to vibrant Latin rhythms, we bring traditional dances to life with passion and expertise.
          </p>
        </FadeIn>
      </Container>

      <DancePrograms />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Vinazza Student', logo: logoPhobiaDark }}
      >
        At Vinazza, the instructors are not only skilled dancers but also passionate about sharing our culture. Thanks to them, I&apos;ve learned not just the steps, but the history and meaning behind each dance.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
