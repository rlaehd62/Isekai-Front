import { FaBeer } from 'react-icons/fa';
import BookCard from './components/BookCard';
import TagNav from './components/TagNav';

export default function Home() {

  const books = [
      {
        'title': "나 혼자만 레벨업",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "나 혼자만 버스타고 레벨업",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "나 혼자만 템빨로 레벨업",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      },

      {
        'title': "Solo Leveling",
        'description': 'Something cool description Something cool description Something cool description'
      }
  ]

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex mt-5 text-2xl font-bold'>
        <h1>TOP 10</h1>
      </div>

      <div className='mt-5 flex flex-1 flex-col gap-3'>
        {
          books.map((item, index) => (
            <BookCard key={index+1} title={item.title} description={item.description} rank={index+1}></BookCard>
        ))
        }
      </div>
    </div>
  );
}
