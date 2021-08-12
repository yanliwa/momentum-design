# Date Range Picker

### Attributes

- `should-close-on-select` : Boolean - toggle behavior
- `maxDate` : String - set default dates if desired, in SQL Date format
- `placeholder` : String - set placeholder text
- `minDate` : String - set default dates if desired, in SQL Date format
- `weekStart` : String - set which date is first, Sunday or Monday
- `value` : String - set default or read selction output
- `includes-time` : Boolean - toggles the timestamp
- `locale` : String - set local for proper language rendering
- `disabled` : Boolean - toggle disabled state

### Named Slots

Placed slotted content using the target named slots:
`slot="menu-trigger"`
`slot="input-section"`
`slot="time-picker"`