export interface Repository {
    name: string;
  }
export interface RepositoryContent {
      name: string;
      type: 'file' | 'dir';
}