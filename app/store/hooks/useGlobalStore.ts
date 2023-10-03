import { useDispatch, useSelector } from 'react-redux';

function useGlobalStore() {
  const dispatch = useDispatch();

  const useTypedSelector = useSelector;

  return { dispatch, useTypedSelector };
}

export default useGlobalStore;
