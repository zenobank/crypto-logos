function buildReqParams(
  data: Record<
    string,
    string | number | boolean | null | Array<string | number | boolean | null>
  >,
): string {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item ? item.toString() : ''));
    } else if (!!value) {
      params.append(key, value.toString());
    }
  });

  return params.toString();
}

export default buildReqParams;
