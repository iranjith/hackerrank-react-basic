import './App.css'
import Articles, { Article } from './components/articles';
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

const articles: Article[] = [
  { title: 'React Basics', upvotes: 123, date: '2024-05-29' },
  { title: 'Advanced TypeScript', upvotes: 456, date: '2024-05-21' },
  { title: 'Understanding Redux', upvotes: 789, date: '2022-05-22' },
]

function App() {

  return (
    <>
      {/* <Slide slides={slides}></Slide> */}
      <Articles articles={articles}></Articles>
    </>
  )
}

export default App
