# Dropdown

### Attributes

- `title` : String - title text
- `options` : Array - list of dropdown options
- `option-id` : String -
- `option-value` : String - reflected selected value from dropdown list
- `defaultOption` : Object -
- `disabled` : Boolean - toggle disabled state
- `allow-unselected` : Boolean - toggle ability to not make a selection
- `visible-option` : Number - set the number of dropdown items viewable in dropdown list

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. Dropdown has several parts you can modify:
"dropdown"
"dropdown-header"
"dropdown-options"
"dropdown-option"
"label"
For example, in your application's stylesheet you can say:

```CSS
md-dropdown::part(dropdown-header) {
  font-weight: 900;
}
```

### Example

```html
<md-dropdown
    .options="${dropdownObjectLongOptions}"
    option-id="id"
    option-value="country"
    @dropdown-selected="${(e: CustomEvent<Dropdown.EventDetail["dropdown-selected"]>) => {
      console.log("[Multi KeyValue Objects Long Options] Selected: ", e.detail);
    }}"
  ></md-dropdown>
```
