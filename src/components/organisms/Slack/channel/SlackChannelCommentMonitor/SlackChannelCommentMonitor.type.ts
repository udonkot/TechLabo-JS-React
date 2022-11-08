export interface SlackChannelCommentMonitorType {
  user: string
  value: number
};

export type SlackChannelCommentResponseType = [
  {
    type: string
    yyyymm: string
    comments: SlackChannelCommentMonitorType[]
  }
]
