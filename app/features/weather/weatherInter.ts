export interface CASTITEM {
  /** 日期 */
  date: string;
  /** 星期几 */
  week: string;
  /** 白天天气现象 */
  dayweather: string;
  /** 晚上天气现象 */
  nightweather: string;
  /** 白天温度 */
  daytemp: string;
  /** 晚上温度 */
  nighttemp: string;
  /** 白天风向 */
  daywind: string;
  /** 晚上风向 */
  nightwind: string;
  /** 白天风力 */
  daypower: string;
  /** 晚上风力 */
  nightpower: string;
}

export interface FORECAST {
  /** 城市名称 */
  city?: string;
  /** 城市编码 */
  adcode?: string;
  /** 省份名称 */
  province?: string;
  /** 预报发布时间 */
  reporttime?: string;
  /** 预报数据list结构 */
  casts: CASTITEM[];
}
