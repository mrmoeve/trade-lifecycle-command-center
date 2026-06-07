import {
  ClientProfile,
  ExceptionRecord,
  FixSession,
  SettlementRecord,
  TradeRecord
} from "@/lib/types";

export const trades: TradeRecord[] = [
  {
    tradeId: "EQ-20260607-0012",
    client: "NorthBridge Asset Management",
    trader: "L. Chen",
    assetClass: "Equities",
    instrument: "MSFT US",
    side: "Buy",
    notional: 24500000,
    quantity: 56000,
    venue: "NASDAQ",
    region: "AMER",
    status: "Allocated",
    stpScore: 98.4,
    exceptionFlag: false,
    settlementDate: "2026-06-09",
    allocationStatus: "96% complete",
    confirmationStatus: "Pending affirmation",
    lifecycleStage: "Allocation"
  },
  {
    tradeId: "FX-20260607-0048",
    client: "Helios Sovereign Fund",
    trader: "J. Malik",
    assetClass: "FX",
    instrument: "EUR/USD SPOT",
    side: "Sell",
    notional: 78000000,
    quantity: 78000000,
    venue: "360T",
    region: "EMEA",
    status: "Confirmed",
    stpScore: 99.1,
    exceptionFlag: false,
    settlementDate: "2026-06-08",
    allocationStatus: "Fully allocated",
    confirmationStatus: "Matched",
    lifecycleStage: "Confirmation"
  },
  {
    tradeId: "FI-20260607-0104",
    client: "Redwood Pension Partners",
    trader: "A. Rossi",
    assetClass: "Fixed Income",
    instrument: "UST 4.125 2034",
    side: "Buy",
    notional: 156000000,
    quantity: 152000000,
    venue: "Tradeweb",
    region: "AMER",
    status: "Exception",
    stpScore: 83.8,
    exceptionFlag: true,
    settlementDate: "2026-06-10",
    allocationStatus: "Broker block pending",
    confirmationStatus: "Economic details mismatch",
    lifecycleStage: "Exception"
  },
  {
    tradeId: "OPT-20260607-0181",
    client: "Summit Delta Strategies",
    trader: "P. Wright",
    assetClass: "Options",
    instrument: "AAPL 06/19/26 C220",
    side: "Sell",
    notional: 18200000,
    quantity: 1450,
    venue: "CBOE",
    region: "AMER",
    status: "Captured",
    stpScore: 95.6,
    exceptionFlag: false,
    settlementDate: "2026-06-08",
    allocationStatus: "Awaiting sub-account split",
    confirmationStatus: "Not sent",
    lifecycleStage: "Capture"
  },
  {
    tradeId: "FUT-20260607-0220",
    client: "Granite Macro Advisors",
    trader: "S. Ito",
    assetClass: "Futures",
    instrument: "ESU6",
    side: "Buy",
    notional: 34800000,
    quantity: 480,
    venue: "CME",
    region: "AMER",
    status: "Matched",
    stpScore: 97.8,
    exceptionFlag: false,
    settlementDate: "2026-06-08",
    allocationStatus: "Fully allocated",
    confirmationStatus: "Clearing matched",
    lifecycleStage: "Matching"
  },
  {
    tradeId: "ETF-20260607-0272",
    client: "BluePeak Wealth",
    trader: "M. Diaz",
    assetClass: "ETFs",
    instrument: "LQD US",
    side: "Buy",
    notional: 11400000,
    quantity: 102000,
    venue: "NYSE Arca",
    region: "AMER",
    status: "Settled",
    stpScore: 99.5,
    exceptionFlag: false,
    settlementDate: "2026-06-07",
    allocationStatus: "Complete",
    confirmationStatus: "Affirmed",
    lifecycleStage: "Settlement"
  }
];

export const stpTrend = [
  { label: "08:00", stp: 92.4, matched: 178, exceptions: 18 },
  { label: "10:00", stp: 93.8, matched: 226, exceptions: 16 },
  { label: "12:00", stp: 94.9, matched: 284, exceptions: 14 },
  { label: "14:00", stp: 95.7, matched: 322, exceptions: 11 },
  { label: "16:00", stp: 96.3, matched: 347, exceptions: 9 },
  { label: "18:00", stp: 96.8, matched: 371, exceptions: 7 }
];

export const lifecycleBreakdown = [
  { stage: "Capture", value: 64 },
  { stage: "Allocation", value: 51 },
  { stage: "Confirmation", value: 43 },
  { stage: "Matching", value: 38 },
  { stage: "Settlement", value: 32 },
  { stage: "Exception", value: 12 }
];

export const assetClassVolumes = [
  { assetClass: "Equities", volume: 324 },
  { assetClass: "Options", volume: 102 },
  { assetClass: "Futures", volume: 84 },
  { assetClass: "FX", volume: 196 },
  { assetClass: "Fixed Income", volume: 143 },
  { assetClass: "ETFs", volume: 88 }
];

export const exceptions: ExceptionRecord[] = [
  {
    id: "EX-1138",
    tradeId: "FI-20260607-0104",
    client: "Redwood Pension Partners",
    reason: "Counterparty economics mismatch on coupon accrual",
    severity: "Critical",
    owner: "Middle Office FI",
    ageMinutes: 47,
    status: "Investigating"
  },
  {
    id: "EX-1146",
    tradeId: "OPT-20260607-0199",
    client: "Summit Delta Strategies",
    reason: "Give-up account not mapped for listed options",
    severity: "High",
    owner: "Derivatives Ops",
    ageMinutes: 31,
    status: "Open"
  },
  {
    id: "EX-1152",
    tradeId: "FX-20260607-0061",
    client: "Helios Sovereign Fund",
    reason: "SSI mismatch for CLS eligible settlement instruction",
    severity: "Medium",
    owner: "FX Settlements",
    ageMinutes: 18,
    status: "Investigating"
  },
  {
    id: "EX-1168",
    tradeId: "EQ-20260607-0098",
    client: "NorthBridge Asset Management",
    reason: "Late allocation amendment after market cutoff",
    severity: "Low",
    owner: "Equity Middle Office",
    ageMinutes: 12,
    status: "Resolved"
  }
];

export const fixSessions: FixSession[] = [
  {
    session: "FIDESSA_NY_EQD_01",
    counterparty: "Fidessa",
    region: "AMER",
    status: "Connected",
    uptime: 99.98,
    msgRate: 1840,
    rejects: 0,
    lastHeartbeat: "09:04:41 ET"
  },
  {
    session: "FLEXTRADE_LON_FX_02",
    counterparty: "FlexTrade",
    region: "EMEA",
    status: "Degraded",
    uptime: 98.72,
    msgRate: 1265,
    rejects: 3,
    lastHeartbeat: "09:04:38 ET"
  },
  {
    session: "ALADDIN_GBL_FI_07",
    counterparty: "Aladdin",
    region: "GLOBAL",
    status: "Connected",
    uptime: 99.91,
    msgRate: 910,
    rejects: 1,
    lastHeartbeat: "09:04:44 ET"
  },
  {
    session: "CRD_CHI_DER_05",
    counterparty: "Charles River",
    region: "AMER",
    status: "Disconnected",
    uptime: 96.31,
    msgRate: 0,
    rejects: 7,
    lastHeartbeat: "08:58:13 ET"
  }
];

export const settlements: SettlementRecord[] = [
  {
    tradeId: "EQ-20260607-0012",
    client: "NorthBridge Asset Management",
    assetClass: "Equities",
    currency: "USD",
    amount: 24500000,
    settlementDate: "2026-06-09",
    custodian: "BNY Mellon",
    settlementStatus: "At Risk",
    affirmations: 92
  },
  {
    tradeId: "FX-20260607-0048",
    client: "Helios Sovereign Fund",
    assetClass: "FX",
    currency: "USD",
    amount: 78000000,
    settlementDate: "2026-06-08",
    custodian: "State Street",
    settlementStatus: "Ready",
    affirmations: 100
  },
  {
    tradeId: "FI-20260607-0104",
    client: "Redwood Pension Partners",
    assetClass: "Fixed Income",
    currency: "USD",
    amount: 156000000,
    settlementDate: "2026-06-10",
    custodian: "JPM Custody",
    settlementStatus: "Failed",
    affirmations: 61
  },
  {
    tradeId: "ETF-20260607-0272",
    client: "BluePeak Wealth",
    assetClass: "ETFs",
    currency: "USD",
    amount: 11400000,
    settlementDate: "2026-06-07",
    custodian: "Northern Trust",
    settlementStatus: "Settled",
    affirmations: 100
  }
];

export const clients: ClientProfile[] = [
  {
    name: "NorthBridge Asset Management",
    segment: "Long Only",
    aum: 128000000000,
    openTrades: 38,
    stpRate: 97.9,
    failedSettlements: 1,
    avgExceptionAge: 14,
    dominantAssetClass: "Equities"
  },
  {
    name: "Helios Sovereign Fund",
    segment: "Sovereign",
    aum: 422000000000,
    openTrades: 22,
    stpRate: 99.1,
    failedSettlements: 0,
    avgExceptionAge: 8,
    dominantAssetClass: "FX"
  },
  {
    name: "Redwood Pension Partners",
    segment: "Pension",
    aum: 91000000000,
    openTrades: 19,
    stpRate: 93.4,
    failedSettlements: 2,
    avgExceptionAge: 29,
    dominantAssetClass: "Fixed Income"
  },
  {
    name: "Summit Delta Strategies",
    segment: "Hedge Fund",
    aum: 18000000000,
    openTrades: 17,
    stpRate: 95.8,
    failedSettlements: 1,
    avgExceptionAge: 17,
    dominantAssetClass: "Options"
  }
];

export const kpis = {
  grossNotional: 941000000,
  tradesToday: 937,
  stpRate: 96.8,
  failedSettlements: 3,
  openExceptions: 12,
  connectedFixSessions: 22
};
