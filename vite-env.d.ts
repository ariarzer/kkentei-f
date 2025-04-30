interface ImportMetaEnv {
  readonly VITE_API_TOKEN: string;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
