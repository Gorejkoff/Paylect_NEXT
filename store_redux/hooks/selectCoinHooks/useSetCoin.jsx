import { useDispatch } from 'react-redux';
import { setCoin } from '@/store_redux/selectCoinSlice';

export default function useSetCoin(props) {
   const dispath = useDispatch();
   return () => {
      dispath(setCoin({
         id: props.id,
         name: props.name,
         token: props.token,
         category: props.category,
         img: props.img,
         badge: props.badge
      }))
   }

}