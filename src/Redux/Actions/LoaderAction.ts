import * as Type from "../Services/Types";

export const LoaderAction = (loader: any) => ({
  type: Type.LOADER,
  loader,
});
