export enum NavigationTypeEnum {
  drawer = 'drawer',
  stack = 'stack',
}

type NavigationTypeEnumValue = keyof typeof NavigationTypeEnum;
type IconSetEnumWithoutPrefix = `${Extract<NavigationTypeEnumValue, string>}`;
export type NavigationTypeEnumPremixValue = {
  [K in NavigationTypeEnumValue as IconSetEnumWithoutPrefix]: IconSetEnumWithoutPrefix;
};
