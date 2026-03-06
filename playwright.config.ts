import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    baseURL: 'https://example.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
