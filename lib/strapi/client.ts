const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
const API_TOKEN = process.env.STRAPI_API_TOKEN ?? '';

export interface StrapiRequestOptions {
  params?: Record<string, string>;
  revalidate?: number | false;
  tags?: string[];
  headers?: Record<string, string>;
}

export async function strapiGet<T>(
  endpoint: string,
  options: StrapiRequestOptions = {}
): Promise<T> {
  const { params, revalidate = 60, tags, headers = {} } = options;

  const url = new URL(`${BASE_URL}/api${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
      ...headers,
    },
    next: {
      revalidate: revalidate === false ? 0 : revalidate,
      ...(tags ? { tags } : {}),
    },
  });

  if (!res.ok) {
    throw new Error(
      `Strapi request failed [${res.status}]: ${endpoint}`
    );
  }

  return res.json() as Promise<T>;
}
