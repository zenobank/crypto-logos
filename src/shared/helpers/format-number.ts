// models
import FormatNumberOptions from '@/shared/models/common/format-number-options';

function formatNumber(value: number, options: FormatNumberOptions = {}): string {
  const {
    locale = 'en',
    maximumFractionDigits = 1,
    minimumFractionDigits = 0,
    notation = 'compact',
    style = 'decimal',
    lowerCaseSuffix = true,
  } = options;

  if (!Number.isFinite(value)) return '0';

  const formatted = Intl.NumberFormat(locale, {
    notation,
    style,
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);

  return lowerCaseSuffix ? formatted.toLowerCase() : formatted;
}

export default formatNumber;