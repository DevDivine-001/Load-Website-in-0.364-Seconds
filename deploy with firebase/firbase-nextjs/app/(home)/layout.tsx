import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
      </div>
  )
}
export default layout