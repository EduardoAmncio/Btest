import { Api } from "./api";
import { HttpClient } from "./http";

interface ConfigData {
  api: Api;
}

export class ConfigProvider {
  private static _config: ConfigData | undefined;

  static get config(): ConfigData {
    if (!this._config)
      throw new Error("Não foi possível carregar as configurações");

    return this._config as ConfigData;
  }

  static async initialize(): Promise<void> {
    if (!this._config) {
      const response = await HttpClient.get<ConfigData>(
        `${window.location.origin}/config.json`
      );
      this._config = response.data;
    }
  }
}
