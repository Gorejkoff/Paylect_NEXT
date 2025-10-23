import { useDispatch } from 'react-redux';
import { openModal } from '@/store_redux/modalsSlice';


export default function useOpenModal(type) {
   const dispath = useDispatch();
   return () => {
      dispath(openModal({
         type: type
      }))
   }

}