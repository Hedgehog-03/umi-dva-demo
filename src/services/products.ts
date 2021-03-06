import { request } from 'umi';

export async function getProducts() {
  return request('/api/products', {
    method: 'GET',
  });
}

export async function deleteProduct(id: number) {
  return request('/api/products/:id', {
    method: 'POST',
    params: {
      id,
    },
  });
}
