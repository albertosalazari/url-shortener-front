import { api } from './api/url-shortener';

type BaseBody = {
  id?: number;
};

export class BaseService<Filters, Body extends BaseBody, Response> {
  constructor(private route: string) {}

  async all(filters?: Filters): Promise<Response[]> {
    const params = this.cleanFilters(filters);
    const response = await api.get(this.route, { ...params });
    return response.json() as Promise<Response[]>;
  }

  async getById(id: number): Promise<Response> {
    const response = await api.get(`${this.route}/${id}`);
    return response.json() as Promise<Response>;
  }

  async create(body: Body): Promise<Response> {
    const response = await api.post(`${this.route}`, { json: body });
    return response.json() as Promise<Response>;
  }

  async update(body: Body): Promise<Response> {
    const response = await api.put(`${this.route}/${body.id}`, { json: body });
    return response.json() as Promise<Response>;
  }

  async delete(id: number) {
    await api.delete(`${this.route}/${id}`);
  }

  private cleanFilters(filters?: Filters) {
    if (!filters) return {};
    return Object.fromEntries(Object.entries(filters).filter(([, v]) => `${v}` !== ''));
  }
}
