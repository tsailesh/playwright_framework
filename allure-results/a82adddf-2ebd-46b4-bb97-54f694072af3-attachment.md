# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/auth-api.spec.ts >> API Auth >> POST /notes return message
- Location: tests/api/auth-api.spec.ts:24:7

# Error details

```
Error: JSON file not found: /src/data/data-api.notes.json
```

# Test source

```ts
  1  | import fs from 'fs';
  2  | import path from 'path';
  3  | 
  4  | export class JsonUtils {
  5  |   /**
  6  |    * Read and parse any JSON file.
  7  |    */
  8  |   static read<T = unknown>(filePath: string): T {
  9  |     const absolutePath = path.resolve(filePath);
  10 | 
  11 |     if (!fs.existsSync(absolutePath)) {
> 12 |       throw new Error(`JSON file not found: ${absolutePath}`);
     |             ^ Error: JSON file not found: /src/data/data-api.notes.json
  13 |     }
  14 | 
  15 |     try {
  16 |       const content = fs.readFileSync(absolutePath, 'utf-8');
  17 | 
  18 |       return JSON.parse(content) as T;
  19 |     } catch (error) {
  20 |       throw new Error(
  21 |         `Failed to read JSON file: ${absolutePath}\n${error}`
  22 |       );
  23 |     }
  24 |   }
  25 | 
  26 |   /**
  27 |    * Get a nested value using dot notation.
  28 |    *
  29 |    * Example:
  30 |    * JsonUtils.get(data, 'notes_info.0.title')
  31 |    */
  32 |   static get<T = unknown>(
  33 |     data: unknown,
  34 |     keyPath: string
  35 |   ): T | undefined {
  36 |     if (!keyPath) {
  37 |       return data as T;
  38 |     }
  39 | 
  40 |     return keyPath
  41 |       .split('.')
  42 |       .reduce<unknown>((current, key) => {
  43 |         if (current === null || current === undefined) {
  44 |           return undefined;
  45 |         }
  46 | 
  47 |         if (
  48 |           typeof current === 'object' &&
  49 |           key in (current as Record<string, unknown>)
  50 |         ) {
  51 |           return (current as Record<string, unknown>)[key];
  52 |         }
  53 | 
  54 |         return undefined;
  55 |       }, data) as T | undefined;
  56 |   }
  57 | 
  58 |   /**
  59 |    * Read JSON file and get a specific nested value.
  60 |    */
  61 |   static readValue<T = unknown>(
  62 |     filePath: string,
  63 |     keyPath: string
  64 |   ): T | undefined {
  65 |     const data = this.read(filePath);
  66 | 
  67 |     return this.get<T>(data, keyPath);
  68 |   }
  69 | }
```