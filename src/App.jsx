import Footer from "./components/common/Footer"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <AppRoutes/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App