import 'react-redux';

import { reducers } from '@/store';


declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof reducers> { }
}