import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto max-w-2xl'>
      <form>
        <div> 

          <div className="mt-16 grid sm:grid-cols-1 space-y-5">
            <div className="mx-auto">
              <label htmlFor='username' className='block text-sm font-medium leading-8 text-gray-900'> Username: </label>
              <div className="flex w-96 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="Enter username"
                  className='flex-1 rounded-md shadow ring-1 ring-gray-300 focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-400 pl-3 sm:text-sm sm:leading-8'
                />
              </div>
            </div>

            <div className="mx-auto">
              <label htmlFor='username' className='block text-sm font-medium leading-8 text-gray-900'> Password: </label>
              <div className="flex w-96 sm:max-w-md">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  className='flex-1 rounded-md shadow ring-1 ring-gray-300 focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-400 pl-3 sm:text-sm sm:leading-8'
                />
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}


