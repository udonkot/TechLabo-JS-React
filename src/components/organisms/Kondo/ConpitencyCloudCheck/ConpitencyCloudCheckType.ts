export interface ConpitencyCloudItem {
  name: string
  value: number
}

export interface ConpitencyCloudItems {
  category: string
  base: number
  item?: ConpitencyCloudItem[]
}
export interface ConpitencyCloudCheckType {
  grade: string
  items: ConpitencyCloudItems[]
};
