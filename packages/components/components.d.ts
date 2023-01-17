declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MlButton: typeof import('mlysl-ui').MlButton
    MlMenu: typeof import('mlysl-ui').MlMenu
    MlMenuItem: typeof import('mlysl-ui').MlMenuItem
    MlSubMenu: typeof import('mlysl-ui').MlSubMenu
  }
}
export {}
