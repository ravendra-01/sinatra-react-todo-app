import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-wrap justify-center">
        <div className="w-4/5 min-h-dvh bg-red-50">
          <div className="m-8">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 border-2 rounded-xl border-blue-500">
              <h1 className="text-4xl text-white text-center font-bold">TODO List</h1>
            </header>
            <main className="container mx-auto mt-8">
              <Main />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
