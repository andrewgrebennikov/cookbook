declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare type AppDispatchType = typeof import('../providers/StoreProvider').AppDispatch;

type DeepPartialType<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartialType<T[P]>;
    }
  : T;
