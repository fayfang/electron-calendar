import { CASTITEM } from '../../features/weather/weatherInter';

export interface DateItem extends Partial<CASTITEM> {
  /** 公历年 */
  year: number;
  /** 公历月 */
  month: number;
  /** 公历日 */
  day: number;
  /** 0无特殊安排，1工作，2放假 */
  worktime: number;
  /** 农历月 */
  lunarMonth: string;
  /** 农历日 */
  lunarDay: string;
  /** 农历日数字 */
  lunarDayNum: number;
  /** 节气 */
  term?: string;
  /** 节日 */
  festivals: string[];
}
