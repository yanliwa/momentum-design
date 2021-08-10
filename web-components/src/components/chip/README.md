# Chip

Chip component is for email and attachment indicators and can fit multiple purposes either static or clickable.

### Attributes

- `color` : String - set color to design system hue
- `bgColor` : String - set bgcolor to any CSS compliant value
- `textColor` : String - set text color to any CSS compliant value
- `height` : String - set height to any CSS compliant value
- `icon` : String - set icon from the Momentum design system icons
- `iconColor` : String - set icon color to any CSS compliant value
- `role` : String - declare the role of the chip (i.e. 'button')
- `value` : String - set the inner text of chip
- `small` : Boolean - toggle the small style
- `readonly` : Boolean - toggle the read only state
- `selected` : Boolean - toggle selected state
- `disabled` : Boolean - toggle disabled state
- `determinateProgress` : Number - set number value for loader bar
- `indeterminateProgress` : Boolean - toggle a loading state bar

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-chip::part(chip) {
    height: 600px;
    width: 400px;
}
```

Chip has multiple parts you can target for direct styling:

- "chip"
- "chip-icon"
- "chip-left"
- "chip-right"

### Slots

The Card component makes heavy use of passing slotted content to render contents correctly. Use the named slots below to put your content in the right place.

#### Named Slots

custom-left-content
custom-right-content

```html
<md-chip color="cyan" readonly value="developer@cisco.ninja">
  <md-icon name="icon-alert_16" slot="custom-left-content"></md-icon>
  <md-icon name="icon-alarm_16" slot="custom-right-content"></md-icon>
</md-chip>
```
