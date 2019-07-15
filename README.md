# Day Comment

## Configuration

- `"prefix": "######"`
    - The tag before moment.
- `"format": "YYYY/MM/DD ddd HH:mm"`
    - Moment format.
- `"list": ["学习", "产出", "想法", "计划"]`
    - Daily record.
- `"weekPrefix": "#####"`
    - The tag before week.
- `"mode": "today"`
    - Shortcuts action (today, week, nextWeek, weekWithDay, nextWeekWithDay).
- `"firstDay": 0`
    - First day of the week (0: Sunday, 1: Monday, etc).
- `"rangeSeparator": " - "`
    - Range separator between week start and week end.
- `"weekList": ["本周计划", "本周总结"]`
    - Week record.

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
    ```md
    ##### 2019/07/21 - 2019/07/27 
    - 本周计划
    - 本周总结
    ```
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
    ```md
    ##### 2019/07/21 - 2019/07/27 
    - 本周计划
    - 本周总结

    ###### 2019/07/21 Sun
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/22 Mon
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/23 Tue
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/24 Wed
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/25 Thu
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/26 Fri
    - 学习
    - 产出
    - 想法
    - 计划

    ###### 2019/07/27 Sat
    - 学习
    - 产出
    - 想法
    - 计划
    ```



**Enjoy!**
