import type { Product } from '../types';

export interface AdminProduct extends Product {
  is_active: number;
  created_at?: string;
  updated_at?: string;
}

export interface BrandItem {
  id: number;
  name: string;
  product_count: number;
  created_at?: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  product_count: number;
  created_at?: string;
}

export interface AuthUser {
  id: number;
  username: string;
}

const API_BASE = import.meta.env.VITE_API_URL || '/api';

function getAuthHeader(): Record<string, string> {
  const token = localStorage.getItem('akami_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function parseJsonResponse(res: Response, fallbackError: string) {
  let json: any = null;
  try {
    json = await res.json();
  } catch {
    throw new Error(`Error en el servidor (${res.status} ${res.statusText || 'Respuesta no válida'})`);
  }
  if (!res.ok || !json.success) {
    throw new Error(json.error || fallbackError);
  }
  return json;
}

export const api = {
  // -------------------------------------------------------------
  // AUTENTICACIÓN
  // -------------------------------------------------------------
  async login(username: string, password: string):Promise<{ token: string; user: AuthUser }> {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const json = await parseJsonResponse(res, 'Credenciales incorrectas');
    localStorage.setItem('akami_token', json.data.token);
    return json.data;
  },

  async logout(): Promise<void> {
    try {
      await fetch(`${API_BASE}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        }
      });
    } catch {
      // Ignorar errores al cerrar sesión
    } finally {
      localStorage.removeItem('akami_token');
    }
  },

  async checkAuth(): Promise<AuthUser | null> {
    const token = localStorage.getItem('akami_token');
    if (!token) return null;

    try {
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: getAuthHeader()
      });
      const json = await parseJsonResponse(res, 'Sesión no válida');
      return json.data;
    } catch {
      localStorage.removeItem('akami_token');
      return null;
    }
  },

  // -------------------------------------------------------------
  // PRODUCTOS (PÚBLICOS & ADMIN)
  // -------------------------------------------------------------
  async getPublicProducts(params?: { brand?: string; category?: string; search?: string }): Promise<Product[]> {
    const query = new URLSearchParams();
    if (params?.brand) query.set('brand', params.brand);
    if (params?.category && params.category !== 'Todos') query.set('category', params.category);
    if (params?.search) query.set('search', params.search);

    const res = await fetch(`${API_BASE}/products?${query.toString()}`);
    const json = await parseJsonResponse(res, 'Error al obtener productos');
    return json.data;
  },

  async getAdminProducts(params?: { status?: string; brand?: string; category?: string; search?: string }): Promise<AdminProduct[]> {
    const query = new URLSearchParams();
    if (params?.status) query.set('status', params.status);
    if (params?.brand) query.set('brand', params.brand);
    if (params?.category) query.set('category', params.category);
    if (params?.search) query.set('search', params.search);

    const res = await fetch(`${API_BASE}/admin/products?${query.toString()}`, {
      headers: getAuthHeader()
    });
    const json = await parseJsonResponse(res, 'Error al obtener productos para administración');
    return json.data;
  },

  async createProduct(data: Partial<Product>, imageFile?: File | null): Promise<AdminProduct> {
    const formData = new FormData();
    formData.append('title', data.title || '');
    formData.append('brand', data.brand || '');
    formData.append('category', data.category || '');
    formData.append('price', String(data.price || 0));
    formData.append('description', data.description || data.benefits || '');
    formData.append('compatibility', data.compatibility || '');
    formData.append('ingredients', data.ingredients || '');
    formData.append('benefits', data.benefits || data.description || '');
    formData.append('use', data.use || '');
    formData.append('is_active', '1');

    if (imageFile) {
      formData.append('image_file', imageFile);
    } else if (data.image) {
      formData.append('image', data.image);
    }

    const res = await fetch(`${API_BASE}/admin/products`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: formData
    });
    const json = await parseJsonResponse(res, 'Error al crear producto');
    return json.data;
  },

  async updateProduct(id: number, data: Partial<AdminProduct>, imageFile?: File | null): Promise<AdminProduct> {
    const formData = new FormData();
    if (data.title !== undefined) formData.append('title', data.title);
    if (data.brand !== undefined) formData.append('brand', data.brand);
    if (data.category !== undefined) formData.append('category', data.category);
    if (data.price !== undefined) formData.append('price', String(data.price));
    if (data.description !== undefined) formData.append('description', data.description);
    if (data.benefits !== undefined) formData.append('benefits', data.benefits);
    if (data.is_active !== undefined) formData.append('is_active', String(data.is_active));

    if (imageFile) {
      formData.append('image_file', imageFile);
    } else if (data.image !== undefined) {
      formData.append('image', data.image);
    }

    const res = await fetch(`${API_BASE}/admin/products/${id}`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: formData
    });
    const json = await parseJsonResponse(res, 'Error al actualizar producto');
    return json.data;
  },

  async toggleProductStatus(id: number, isActive: boolean): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/products/${id}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify({ is_active: isActive ? 1 : 0 })
    });
    await parseJsonResponse(res, 'Error al cambiar estado del producto');
  },

  async deleteProduct(id: number): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/products/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'DELETE',
        ...getAuthHeader()
      }
    });
    await parseJsonResponse(res, 'Error al eliminar producto');
  },

  // -------------------------------------------------------------
  // MARCAS
  // -------------------------------------------------------------
  async getBrands(): Promise<BrandItem[]> {
    const res = await fetch(`${API_BASE}/brands`);
    const json = await parseJsonResponse(res, 'Error al obtener marcas');
    return json.data;
  },

  async createBrand(name: string): Promise<BrandItem> {
    const res = await fetch(`${API_BASE}/admin/brands`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify({ name })
    });
    const json = await parseJsonResponse(res, 'Error al crear marca');
    return json.data;
  },

  async updateBrand(id: number, name: string): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/brands/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'PUT',
        ...getAuthHeader()
      },
      body: JSON.stringify({ name })
    });
    await parseJsonResponse(res, 'Error al actualizar marca');
  },

  async deleteBrand(id: number): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/brands/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'DELETE',
        ...getAuthHeader()
      }
    });
    await parseJsonResponse(res, 'Error al eliminar marca');
  },

  // -------------------------------------------------------------
  // CATEGORÍAS
  // -------------------------------------------------------------
  async getCategories(): Promise<CategoryItem[]> {
    const res = await fetch(`${API_BASE}/categories`);
    const json = await parseJsonResponse(res, 'Error al obtener categorías');
    return json.data;
  },

  async createCategory(name: string): Promise<CategoryItem> {
    const res = await fetch(`${API_BASE}/admin/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify({ name })
    });
    const json = await parseJsonResponse(res, 'Error al crear categoría');
    return json.data;
  },

  async updateCategory(id: number, name: string): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/categories/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'PUT',
        ...getAuthHeader()
      },
      body: JSON.stringify({ name })
    });
    await parseJsonResponse(res, 'Error al actualizar categoría');
  },

  async deleteCategory(id: number): Promise<void> {
    const res = await fetch(`${API_BASE}/admin/categories/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'DELETE',
        ...getAuthHeader()
      }
    });
    await parseJsonResponse(res, 'Error al eliminar categoría');
  }
};
