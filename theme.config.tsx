import Image from 'next/image'

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