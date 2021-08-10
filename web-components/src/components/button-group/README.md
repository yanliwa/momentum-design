# ButtonGroup

ButtonGroup provides a UI pattern for multi-state toggles.

### Attributes

- `active` : Number - set the default active option
- `disabled` : Boolean - toggle disabled state

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-button-group::part(button-group) {
    width: 100px;
    max-width: 600px;
    font-size: 14px;
}
```

### Slots

#### Named Slots

```html
<md-button-group>
  <button slot="button" aria-label="pie-chart" type="button" value="pie-chart">
    <md-icon name="icon-pie-chart_16"></md-icon>
  </button>
  <button slot="button" aria-label="text-table" type="button" value="text-table">
    <md-icon name="icon-text-table_16"></md-icon>
  </button>
  <button slot="button" aria-label="analysis" type="button" value="analysis">
    <md-icon name="icon-analysis_16"></md-icon>
  </button>
</md-button-group>
```
