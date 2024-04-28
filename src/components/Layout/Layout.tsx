import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

export default function Layout() {
  return (
    <>
    <div className='wrapper'>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
    </>
    
  )
}
