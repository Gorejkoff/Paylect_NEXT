import { useDispatch } from 'react-redux';
import { setFormat } from '@/store_redux/selectCoinSlice';

export default function useSetFormat(props) {
   const dispath = useDispatch();
   return () => {
      dispath(setFormat(props))
   }
}