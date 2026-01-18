interface FormatNumberOptions {
  locale?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  notation?: Intl.NumberFormatOptions['notation'];
  style?: Intl.NumberFormatOptions['style'];
  lowerCaseSuffix?: boolean;
}

export default FormatNumberOptions;