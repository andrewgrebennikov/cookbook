import { createReduxStore } from '../../store/store';

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
