# Day Comment
> Insert day/week record template in MD format.

## Configuration

- `"prefix": "######"`
    - The tag before moment.
- `"format": "YYYY/MM/DD ddd HH:mm"`
    - Moment format.
- `"list": ["学习", "产出", "想法", "计划"]`
    - Daily record.
- `"weekPrefix": "#####"`
    - The tag before week range.
- `"mode": "today"`
    - Shortcuts action (today, week, nextWeek, weekWithDay, nextWeekWithDay).
    - today => `DayComment: Today`
    - week => `DayComment: Week`
    - nextWeek => `DayComment: Next Week`
    - weekWithDay => `DayComment: Week WithDay`
    - nextWeekWithDay => `DayComment: Next Week WithDay`
- `"firstDay": 0`
    - First day of the week (0: Sunday, 1: Monday, etc).
- `"rangeSeparator": " - "`
    - Range separator between week start and week end.
- `"weekList": ["本周计划", "本周总结"]`
    - Week record.
- `"weekWithoutWeekend": false`
    - Not list Sunday and Saturday when execute ’weekWithDay‘ or ‘nextWeekWithDay’.

## Shortcut

Default shortcut is `ctrl + 5`  / `cmd + 5`


## Example

- DayComment: Today
    ```md
    ###### 2019/07/15 Mon 
    - 学习
    - 产出
    - 想法
    - 计划
    ```
- DayComment: Week
    ```md
    ##### 2019/07/14 - 2019/07/20 
    - 本周计划
    - 本周总结
    ```
- DayComment: Next Week
    - Same as 'DayComment: Week'.
- DayComment: Week WithDay
    ```md
    ##### 2019/07/14 - 2019/07/20 
    - 本周计划
    - 本周总结

    ###### 2019/07/14 Sun
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/15 Mon
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/16 Tue
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/17 Wed
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/18 Thu
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/19 Fri
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/20 Sat
    - 学习
    - 产出
    - 想法
    - 计划
    ```
- DayComment: Next Week WithDay
    - Same as 'DayComment: Week WithDay'.

**Enjoy!**
