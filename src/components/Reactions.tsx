import { useSelector, useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoodIcon from '@mui/icons-material/Mood';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { RootState } from '../store/reducers/index';
import { increment } from '../store/actions/counterAction';

const Reactions: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(increment());
  };
  console.log(count);
  

  return (
    <div className='flex justify-between items-center w-[100%] my-4'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleIncrement}>
        <ThumbUpAltIcon />
        <p className='text-sm'>{count}</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleIncrement}>
        <MoodIcon />
        <p className='text-sm'>{count}</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleIncrement}>
        <FavoriteBorderIcon />
        <p className='text-sm'>{count}</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleIncrement}>
        <ThumbDownAltIcon />
        <p className='text-sm'>{count}</p>
      </div>
    </div>
  );
};

export { Reactions };