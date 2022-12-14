import type {AutoCatchingType} from "./events/AutoCatchingType";

export class AffiseInitProperties {
  affiseAppId?: string | null;
  isProduction: boolean;
  partParamName?: string | null;
  partParamNameToken?: string | null;
  appToken?: string | null;
  secretId?: string | null;
  enabledMetrics: boolean;
  autoCatchingClickEvents?: AutoCatchingType[];

  constructor(
    affiseAppId?: string | null,
    isProduction: boolean = true,
    partParamName?: string | null,
    partParamNameToken?: string | null,
    appToken?: string | null,
    secretId?: string | null,
    enabledMetrics: boolean = false,
    autoCatchingClickEvents: AutoCatchingType[] = []
  ) {
    this.affiseAppId = affiseAppId;
    this.isProduction = isProduction;
    this.partParamName = partParamName;
    this.partParamNameToken = partParamNameToken;
    this.appToken = appToken;
    this.secretId = secretId;
    this.enabledMetrics = enabledMetrics;
    this.autoCatchingClickEvents = autoCatchingClickEvents;
  }
}
