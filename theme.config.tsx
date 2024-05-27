import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const theme = {
  logo: <h2 style={{display: 'flex', gap: '5px'}}><Image src="/images/icon-dark.png" alt="Logo" height={18} width={24} />Mockman</h2>,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  editLink: {
    component: () => null
  },
  footer: {
    component: () => null
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig();
    let formattedTitle = `${title}`;
    if (asPath.includes('/docs')) {
      formattedTitle = `${title} - Mockman docs`
    }

    return {
      title: formattedTitle,
      description: 'Mockman docs containing parameters to configure mocking rules for xhr requests.',
      additionalLinkTags: [
        {
          rel: 'icon',
          type: "image/x-icon",
          href: '/images/icon-dark.png'
        }
      ],
      openGraph: {
        url: 'https://mockman.dev/',
        title: 'Mockman - Mock Apis',
        description: 'Mockman docs containing parameters to configure mocking rules for xhr requests.',
        images: [
          {url: '/images/mock/rule-create.png'}
        ]
      }

    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter, title } = useConfig();

    let formattedTitle = `${title}`;
    if (asPath.includes('/docs')) {
      formattedTitle = `${title} - Mockman docs`
    }

    return (
      <>
        <title>{formattedTitle}</title>
        <meta property="og:title" content={formattedTitle} />
        <meta
          property="og:description"
          content={'Mockman docs containing parameters to configure mocking rules for xhr requests.'}
        />
        <meta property="og:image" content="/images/mock/rule-create.png" />
        <link rel="icon" type="image/x-icon" href="/images/icon-dark.png"></link>
      </>
    )
  },
  sidebar: {
    titleComponent({ title, type }: any) {

      // if (type === 'separator') {
      //   return (
      //     <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
      //   )
      // }

      if (title === 'Create') {
        return <>➕ {title}</>
      }
      if (title === 'Delete') {
        return <>🗑️ {title}</>
      }
      if (title === 'Update') {
        return <>✎ {title}</>
      }
      return <>{title}</>
    }
  }
}

export default theme;