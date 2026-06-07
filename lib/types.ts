export type AssetClass = "Equities" | "Options" | "Futures" | "FX" | "Fixed Income" | "ETFs";

export type TradeStatus =
  | "Captured"
  | "Allocated"
  | "Confirmed"
  | "Matched"
  | "Settled"
  | "Exception";

export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface TradeRecord {
  tradeId: string;
  client: string;
  trader: string;
  assetClass: AssetClass;
  instrument: string;
  side: "Buy" | "Sell";
  notional: number;
  quantity: number;
  venue: string;
  region: string;
  status: TradeStatus;
  stpScore: number;
  exceptionFlag: boolean;
  settlementDate: string;
  allocationStatus: string;
  confirmationStatus: string;
  lifecycleStage: string;
}

export interface ExceptionRecord {
  id: string;
  tradeId: string;
  client: string;
  reason: string;
  severity: Severity;
  owner: string;
  ageMinutes: number;
  status: "Open" | "Investigating" | "Resolved";
}

export interface FixSession {
  session: string;
  counterparty: string;
  region: string;
  status: "Connected" | "Degraded" | "Disconnected";
  uptime: number;
  msgRate: number;
  rejects: number;
  lastHeartbeat: string;
}

export interface SettlementRecord {
  tradeId: string;
  client: string;
  assetClass: AssetClass;
  currency: string;
  amount: number;
  settlementDate: string;
  custodian: string;
  settlementStatus: "Ready" | "At Risk" | "Failed" | "Settled";
  affirmations: number;
}

export interface ClientProfile {
  name: string;
  segment: string;
  aum: number;
  openTrades: number;
  stpRate: number;
  failedSettlements: number;
  avgExceptionAge: number;
  dominantAssetClass: AssetClass;
}
