import logo from "/logo.png"

export default function Header() {
  return (
    <section className=' max-w-7xl mx-auto'>
      <div className=" w-full flex flex-row justify-center items-center h-32">
        <img src={logo} alt="" className=" p-1 h-full" />
      </div>
    </section>
  )
}
