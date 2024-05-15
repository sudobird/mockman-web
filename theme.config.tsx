import Image from 'next/image'

const theme = {
  logo: <h2 style={{display: 'flex', gap: '5px'}}><Image src="/images/icon-dark.png" alt="Logo" height={18} width={24} />Mockman</h2>,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  // ... other theme options
}

export default theme;