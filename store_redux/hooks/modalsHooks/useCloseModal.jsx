import { useDispatch } from 'react-redux';
import { closeModal } from '@/store_redux/modalsSlice';

export default function useCloseModal(type) {
   const dispath = useDispatch();
   return () => {
      dispath(closeModal({
         type: type
      }))
   }

}