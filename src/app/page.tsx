import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <main>
        <header className='p-24 h-1/2 skew-y-2 translate-y-6 bg-gray-800 w-screen flex flex-col justify-center items-center'>
          <div className="-skew-y-2 text-center flex flex-col">
            {/* <Image src='/images/logo.png' width={580} height={90} alt='logo'></Image> */}
            <h1 className="flex items-center">
              <Image src='/images/icon.png' height={80} width={80} alt='logo'></Image> <div className="text-7xl ml-4 font-serif text-white">MOCKMAN</div>
            </h1>
            
            <a className="text-blue-500 font-bold hover:text-blue-400" href='https://chrome.google.com/webstore/detail/mockman-mock-apis/bigfgeehfoenaimkoohnokeeideaomnd'
              target='_blank' rel="noreferrer">Chrome Extension ➤</a>
          </div>
          
        </header>

        <section className='flex w-screen flex-col justify-center items-center mt-20'>
          <h1 className="text-4xl">Mock your apis like 🤌</h1>
          <h2 className='text-2xl'>what all you can do??</h2>
          <hr className="w-1/3 mt-4 border-1 border-gray-400"/>
          <ul className='text-center mt-4'>
            <li>Backend less development</li>
            <li>Test ui against erroneous data</li>
            <li>Demo your product with just frontend</li>
            <li>Make different versions of features and switch them on api response</li>
            <li>Add labels to make different responses to same api.</li>
          </ul>
          <Link className="mt-2 text-blue-500 hover:text-blue-700" href='/docs' prefetch={true}>Refer the docs ➤</Link>
        </section>

      </main>
    </main>
  );
}
