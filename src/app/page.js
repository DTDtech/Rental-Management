import Image from 'next/image'
import Logo from '../../public/Logo/92sLogo.jpg';


export default function Home() {
  return (
    <div className='mx-auto max-w-2xl'>

      <form>
        <div>

          <div className="mt-10 grid sm:grid-cols-1 gap-y-5">
            <div className="mx-auto">
              <Image
                src={Logo}
                alt="92s logo"
                width={200}
                height={200}
              />
            </div>

            <div className="mx-auto">
              <label htmlFor='username' className='block text-sm font-medium leading-8 text-pianoBlack'> Username: </label>
              <div className="flex w-96 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="Enter username"
                  className='flex-1 rounded-md shadow ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-atomicPink pl-3 sm:text-sm sm:leading-8'
                />
              </div>
            </div>

            <div className="mx-auto">
              <label htmlFor='username' className='block text-sm font-medium leading-8 text-pianoBlack'> Password: </label>
              <div className="flex w-96 sm:max-w-md">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  className='flex-1 rounded-md shadow ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-atomicPink pl-3 sm:text-sm sm:leading-8'
                />
              </div>
            </div>

            <div className="mx-auto mt-2">
              <button type='button' className='rounded-md shadow bg-atomicPink/50 hover:bg-lightPastelPurple focus:outline-none focus:ring-2 focus:ring-lavender px-3 py-2 text-sm text-white'> Sign in </button>
            </div>

          </div>        
        </div>
      </form>
    </div>
  )
}

