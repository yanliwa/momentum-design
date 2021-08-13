# Label

### Attributes

- `label` : String -
- `theme` : String - add theme style
- `radioLabel` : Boolean - indicate label for radio input
- `checkboxLabel` : Boolean - indicate label for checkbox input
- `toggleSwitchLabel` : Boolean - indicate label for toggle
- `htmlFor` : String - set ID of what input the label is for
- `active` : Boolean - toggle active state
- `disabled` : Boolean - toggle disabled state
- `indeterminate` : Boolean - set indeterminate state
- `secondaryLabel` : Boolean - indicate if secondary level label

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector.
"input"
"message"
For example, in your application's stylesheet you can say:

```CSS
md-input::part(input) {
  background-color: red;
  font-size: 18px;
}
```

### Slots

#### Unnamed Slots

Any valid HTML placed between the `<md-label>` tags will render as is.