
export default function UserNotFound() {
  return (
    <div>
      <section className="flex items-center  p-16 bg-gray-50 ">
          <div className="container flex flex-col items-center ">
              <div className="flex flex-col gap-6 max-w-md text-center">
                  <h2 className="font-extrabold text-9xl text-[#775a49]">
                      <span className="sr-only">Error</span>404
                  </h2>
                  <p className="text-2xl md:text-3xl dark:text-gray-300">Sorry, we couldnt find this page.</p>
                  <a href="#" className="px-8 py-4 text-xl font-semibold rounded bg-[#d1c79f] text-gray-50 hover:text-[#775a49]">Back to home</a>
              </div>
          </div>
      </section>
    </div>
  )
}
