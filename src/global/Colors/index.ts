const colorName = {
  navy: '#003a50',
  pink: '#fc89b0',
  seaform: '#8ac7c0',
  palePink: '#fbede3',
} as const;

const BorderColor = {
  border1: '#ddd',
};

const Colours = {
  appBackground: '#eee6ff',
  baseBackground: '#f5f5f5',

  // Button
  primaryBtn: colorName.navy,
  secondaryBtn: colorName.palePink,

  // Tab
  //   primaryTab: colorName,
  //   borderTab: BorderColor.border1,

  primary: colorName.navy,
  secondary: colorName.palePink,

  contrast: '#f5f5f5',

  primaryText: '#333',
  revPrimaryText: '#eee',
  //
} as const;

export { Colours, BorderColor };
