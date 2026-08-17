import fs from 'fs';
import path from 'path';

export class JsonUtils {
  /**
   * Read and parse any JSON file.
   */
  static read<T = unknown>(filePath: string): T {
    const absolutePath = path.resolve(filePath);
    console.log("Absolute ", absolutePath);

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`JSON file not found: ${absolutePath}`);
    }

    try {
      const content = fs.readFileSync(absolutePath, 'utf-8');

      return JSON.parse(content) as T;
    } catch (error) {
      throw new Error(
        `Failed to read JSON file: ${absolutePath}\n${error}`
      );
    }
  }

  /**
   * Get a nested value using dot notation.
   *
   * Example:
   * JsonUtils.get(data, 'notes_info.0.title')
   */
  static get<T = unknown>(
    data: unknown,
    keyPath: string
  ): T | undefined {
    if (!keyPath) {
      return data as T;
    }

    return keyPath
      .split('.')
      .reduce<unknown>((current, key) => {
        if (current === null || current === undefined) {
          return undefined;
        }

        if (
          typeof current === 'object' &&
          key in (current as Record<string, unknown>)
        ) {
          return (current as Record<string, unknown>)[key];
        }

        return undefined;
      }, data) as T | undefined;
  }

  /**
   * Read JSON file and get a specific nested value.
   */
  static readValue<T = unknown>(
    filePath: string,
    keyPath: string
  ): T | undefined {
    const data = this.read(filePath);

    return this.get<T>(data, keyPath);
  }
}