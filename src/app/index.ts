import { define } from 'skatejs';
import RawApp from './App';

const App = define(RawApp as any) as typeof RawApp;

export {
  App
};
