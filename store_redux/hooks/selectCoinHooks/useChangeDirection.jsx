import { useDispatch } from 'react-redux';
import { changeDirection } from '@/store_redux/selectCoinSlice';

export default function useChangeDirection(props) {
   const dispath = useDispatch();
   return () => {
      dispath(changeDirection(props))
   }

}