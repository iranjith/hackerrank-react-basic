import './App.css'
import Slide from './components/slide-show';

interface SlideObject {
  title: string;
  description: string;
}

const slides: SlideObject[] = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces',
  },
  {
    title: 'Vite',
    description: 'Next generation frontend tooling',
  },
]

function App() {

  return (
    <>
      <Slide slides={slides}></Slide>
      
    </>
  )
}

export default App
