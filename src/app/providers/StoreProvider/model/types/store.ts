import { createReduxStore } from '../../store/store';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
