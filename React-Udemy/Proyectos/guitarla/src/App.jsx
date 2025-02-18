import { useEffect, useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/guitar"
import { db } from "./data/db"

function App() {

  //Nuestros datos desde un archivo para usarlo en el proyecto(es nuestra bd)
  const [data, setData] = useState(db)

  // //Otra forma: Si fuera desde una API, se usa useEffect
  // useEffect(() => {
  //   setData(db)
  // }, [])

  console.log(data)

  return (
    <>
      <Header/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/*Se puede tambien usar return*/}
          {data.map((guitar) => (
              <Guitar
                key={guitar.id} //Siempre se usa cuando se itere una lista
                guitar={guitar}
              />
            )
          )}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
